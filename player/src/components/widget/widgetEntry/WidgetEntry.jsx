import widEntryStyles from "./WidgetEntry.module.css";

export default function WidgetEntry({ title, subtitle, image }) {
   return (
      <div className={widEntryStyles["entry-body"]}>
         <img
            src={image}
            alt={title}
            className={widEntryStyles["entry-image"]}
         />
         <div className={widEntryStyles["entry-right-body"]}>
            <p className={widEntryStyles["entry-title"]}>{title}</p>
            <p className={widEntryStyles["entry-subtitle"]}>{subtitle}</p>
         </div>
      </div>
   );
}
