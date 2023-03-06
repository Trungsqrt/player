**NOTICE**

- This project use authenticate with **spotify authentication**
- The **data of user** set to **localStorage** and will be **remove** when **close the tab**
- This project not implement the **refresh token**, so after 1 hour the token **will be expire**.
- Data(song, playlist,...) is the data of real spotify user account
**This project is serve for study and research**

**This document will describe the develop progress regardless the design (html or css)**

# Setup spotify api

**Create new section in spotify developer api to get**

auth end point
client id
...

And assign it to .env for security

```js
REACT_APP_AUTHENDPOINT = https://accounts.spotify.com/authorize?
REACT_APP_CLIENID =
REACT_APP_REDIRECTURL =
```

> Setting scope for api

```js
const scope = ["user-library-read", "playlist-read-private"];
```

> user-library-read: Read access to a user's library
> playlist-read-private: Read access to user's private playlists.

See more in "https://developer.spotify.com/documentation/general/guides/authorization/scopes/#playlist-read-private"

After that we need to set login Endpoint

```js
export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
   "%20"
)}&response_type=token&show_dialog=true`;
```

And setting axios for authentication

```js
const apiClient = axios.create({
   baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
   apiClient.interceptors.request.use(async function (config) {
      config.headers.Authorization = "Bearer " + token;
      return config;
   });
};
```

> This code exports a function called setClientToken that sets an authentication token in the headers of outgoing requests made with an Axios HTTP client instance called apiClient.
> When setClientToken is called with a token argument, it intercepts any outgoing requests made by apiClient using the apiClient.interceptors.request.use method
> The config object passed to the interceptor contains the request's headers, among other things
> The Authorization header is set to the value of "Bearer " + token. This format is commonly used in authorization headers for JWT (JSON Web Token) authentication. The Bearer string is added before the token to indicate the type of authorization being used.
> The config object is returned, allowing the request to proceed with the updated headers.
> By setting the authentication token in the headers of outgoing requests, this function ensures that the server can authenticate the user making the request and authorize or deny access to the requested resource accordingly.

# Sidebar

use `useLocation` hook to get current location

> This action helps users know where they are currently on the site

```js
const location = useLocation();
const isActive = location.pathname === prop.to;
const btnClass = isActive
   ? sidebarButtonStyles["btn-body--active"]
   : sidebarButtonStyles["btn-body"];
```

# Main Page

> This code handle the user is logged in or not

```js
const [token, setToken] = useState("");

useEffect(() => {
   const token = window.localStorage.getItem("token");
   // Get the hash that apprears in the searchbar after login
   const hash = window.location.hash;
   // Clear the hash for security
   window.location.hash = "";

   // assign token to localStorage
   if (!token && hash) {
      // Split to get only token
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
   } else {
      setToken(token);
      setClientToken(token);
   }
}, []);
```

> `setClientToken` is a function exported from `spotify.js` for get token and request with that token

# Progress bar

I have a component progress circle that presents for progress bar of a song

`size` is the size of circle, `percentage` is percent of progress

```js
<ProgressCircle
   percentage={75}
   isPlaying={true}
   size={300}
   color="var(--royal-blue)"
/>
```

**in ProgressCircle**
I have a Circle component that is used to draw a circle progress bar

```js
const PI = Math.PI;

const Circle = ({ color, percentage, size, strokeWidth }) => {
   const radius = size / 2 - 10;
   const circ = 2 * PI * radius - 20;
   const strokePercent = ((100 - Math.round(percentage)) * circ) / 100;

   return (
      <circle
         r={radius}
         cx="50%"
         cy="50%"
         fill="transparent"
         stroke={strokePercent !== circ ? color : ""}
         strokeWidth={strokeWidth}
         strokeDasharray={circ}
         strokeDashoffset={percentage ? strokePercent : 0}
         strokeLinecap="round"
      />
   );
};
```

> The `radius` of progress circle, fit with the size of element
> `circ` calculate the perimeter of progress circle, -20 to disconnect the head and tail
> `strokePercent` percentage: percent of progress  
> percent of stroke on max perimeter  
> **Example:** `p = 120`; and `percentage = 75`, it's means the songs **75% played**  
> but 75% of 120 not same **75% of 100**  
> So, I multiply `(100 - Math.round(percentage))` by `circ`(max length of progress) and divide with `100`

**Bellow**

I've used 2 Circle component to display **max length** and **progressing**

```js
function ProgressCircle({ percentage, isPlaying, size, color }) {
   return (
      <div>
         <svg width={size} height={size}>
            <g>
               <Circle strokeWidth={"0.3rem"} color="#3B4F73" size={size} />
               <Circle
                  strokeWidth={"0.5rem"}
                  color={color}
                  size={size}
                  percentage={percentage}
               />
            </g>
         </svg>
      </div>
   );
}
```

**The result**

![alt text](https://res.cloudinary.com/dhheb6iy3/image/upload/v1677749045/Screenshot_2023-03-02_162231_jbouwa.png)

**create rotate disk/image playing**

I defined elements and use it at a later

```js
<defs>
   {/* vinyl disk */}
   <clipPath id="myCircle">
      <circle cx="50%" cy="50%" r={size / 2 - 30} fill="#FFFFFF" />
   </clipPath>
   {/* song image */}
   <clipPath id="myInnerCircle">
      <circle cx="50%" cy="50%" r={size / 2 - 60} fill="#FFFFFF" />
   </clipPath>
</defs>
```

I used here

```js
//vinyl disk
<image
   className={isPlaying ? progressStyle["active"] : ""}
   x={30}
   y={30}
   width={2 * (size / 2 - 30)}
   height={2 * (size / 2 - 30)}
   href="https://pngimg.com/uploads/vinyl/vinyl_PNG107.png"
   clipPath="url(#myCircle)"
/>;

// song image
<image
   className={isPlaying ? progressStyle["active"] : ""}
   x={60}
   y={60}
   width={2 * (size / 2 - 60)}
   height={2 * (size / 2 - 60)}
   href={image}
   clipPath="url(#myInnerCircle)"
/>;
```

> x and y are coor of elements
> width and height are width and height of 2 elements disk and image

# Audio Player

**When chose a playlist**
> Create new audioRef with data is first song in track
> Initial new intervalRef for this audioRef to clearInterval when I need
```js
const audioRef = useRef(new Audio(total[0]?.track.preview_url));
const intervalRef = useRef();
```

> When click a new track or pause/play this function will be run.
> clearInterval to avoid memory leak and create new audioRef after
```js
  // this function update progress time each 0.9s
   const startTimer = () => {
      clearInterval(intervalRef.current);
      
      intervalRef.current = setInterval(() => {
         if (audioRef.current.ended) {
            handleNext();
         } else {
            setTrackProgress(audioRef.current.currentTime);
         }
      }, [900]);
   };
```

> I also need to clearInterval when **unmount** component
```js
   useEffect(() => {
      return () => {
         audioRef.current.pause();
         clearInterval(intervalRef.current);
      };
   }, []);
```

**pausing and playing handler**
```js
   useEffect(() => {
      if (audioRef.current.src) {
         if (isPlaying) {
            audioRef.current.play();
            startTimer();
         } else {
            clearInterval(intervalRef.current);
            audioRef.current.pause();
         }
      } else {
         if (isPlaying) {
            audioRef.current = new Audio(audioSrc);
            audioRef.current.play();
            startTimer();
         } else {
            clearInterval(intervalRef.current);
            audioRef.current.pause();
         }
      }
   }, [isPlaying]);
```

**next and previous handler**
```js
   const handleNext = () => {
      if (currentIndex < total.length - 1) {
         setCurrentIndex(currentIndex + 1);
      } else setCurrentIndex(0);
   };

   const handlePrev = () => {
      if (currentIndex - 1 < 0) setCurrentIndex(total.length - 1);
      else setCurrentIndex(currentIndex - 1);
   };
```

*Will continue to add in the future*
