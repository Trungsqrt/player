# from itertools import count
# import math
# from datetime import date
# from pickle import FALSE
# from random import random
# from re import I, sub
# import re
# from traceback import print_list
# from unittest import result
# from collections import Counter
# import string
# # region Buoi 1:
# # Bai 1
# # print("Bai 1: \n")
# # print("*************")
# # print("*   CS466   *")
# # print("*************")
# # print("\n");

# # #Bai 2
# # print("Bai 2\n")

# # print("Cau a\n")
# # a = int(input("Input a value: "))
# # print("------------------")
# # b = int(input("Input b value: "))
# # print(f"values are: {a}, {b}")
# # print("\n")

# # print("Cau b")
# # print("\n------------------")
# # print("Tong a+b: ", a+b)
# # print(f"Tong a-b: {a-b}")
# # print(f"Tong a*b: {a*b}")
# # if b!=0:
# #      print(f"Tong a/b: {a/b}")
# # else:
# #      print("khong the chia");
# # print("\n")

# # #Bai 3
# # a = int(input("nhập độ dài cạnh a :"))
# # b = int(input("nhập độ dài cạnh b :"))
# # c = int(input("nhập độ dài cạnh c :"))
# # cv = a + b + c
# # p = (a + b + c) / 2
# # s = math.sqrt(p * (p - a) * (p - b) * (p -c))
# # print("chu vi hình tam giác :", cv)
# # print("diện tích hình tam giác :", s)

# # #Bai 4

# # #Bai 5
# # print("nhap a va b")
# # a = float(input("nhap a"))
# # b = float(input("nhap b"))

# # if a == 0:
# #      if b == 0:
# #           print("vsn")
# #      else:
# #           print("vn")
# # else:
# #      print("co nghiem: ", -b/a);

# # #Bai 6
# # def giaiPTBac2(a, b, c):
# # #ax^2 + bx + c = 0
# #      if (a == 0):
# #           if (b == 0):
# #                if(c == 0 ):
# #                     print ("Phương trình vô nghiệm!");
# #                else:
# #                     print ("Phương trình có một nghiệm: x = ", + (-c / b));
# #      else:
# #           delta = b * b - 4 * a * c;

# #           if (delta > 0):
# #                x1 = (float)((-b + math.sqrt(delta)) / (2 * a));
# #                x2 = (float)((-b - math.sqrt(delta)) / (2 * a));
# #                print ("Phương trình có 2 nghiệm là: x1 = ", x1, " và x2 = ", x2);

# #           elif (delta == 0):
# #                x1 = (-b / (2 * a));
# #                print("Phương trình có nghiệm kép: x1 = x2 = ", x1);
# #           else:
# #                print("Phương trình vô nghiệm!");


# # a = float(input("Nhập hệ số bậc 2, a = "));
# # b = float(input("Nhập hệ số bậc 1, b = "));
# # c = float(input("Nhập hằng số tự do, c = "));

# # giaiPTBac2(a, b, c)
# # endregion

# #region Buoi 2+3: 
# # Cau 1:
# # a = "temporator string";
# # print("-------------result-------------")
# # print(a.upper())
# # print(a.capitalize())
# # print(a.lower())
# # print("---------------end---------------")
# # print("\n\n")

# # Cau 2:
# # print("-------------result-------------")
# # Email = "abc@gmail.com"
# # spedString = Email.split("@");
# # Account = spedString[0]
# # Host = spedString[1]
# # print("Host: " + Host + ", Account: " + Account);
# # print("---------------end---------------")

# #Cau 3:
# # print("-------------result-------------")
# # string = "abc@gmail.com Sat Jan 5 09:14:16"
# # arrayItem = string.split(" ")
# # Email = arrayItem[0]
# # spedString = Email.split("@")
# # Account = spedString[0]
# # Host = spedString[1]
# # print("Host: " + Host + ", Account: " + Account);
# # print("---------------end---------------")

# # Cau 4:
# # print("-------------result-------------")
# # string = "Hello Python, wellcome to Python"
# # print("Chuoi hien tai: " + string)
# # indexWord= input("Nhap vao tu can thay the: ")
# # replaceWord = input("Tu muon thay the: ")
# # replacedString = string.replace(indexWord, replaceWord)
# # print("Chuoi sau khi duoc thay the: " + replacedString);
# # print("---------------end---------------")

# # Cau 5:
# # a/
# # print("-------------result-------------")
# # print(a[0:5])
# # firstIndex = len(a) - 5;
# # lastIndex = len(a);
# # print(a[firstIndex:lastIndex]);
# #b/ 
# # b = "temporator string 2"
# # c = "temporator string 3"
# # d = "temporator string 4"

# # print("Sau khi noi: ")
# # print(a, end=" ")
# # print(b, end=" ")
# # print(c, end=" ")
# # print(d, end=" ")

# #c/
# # print(a)
# # print(b)
# # print(c)
# # print(d)
# # print("---------------end---------------")

# # Cau 6
# # str = input("Nhap vao chuoi: ");
# # num = int(input("Nhap vao so: "))
# # print(type(str))
# # print(type(num))

# # Cau 7
# # print("-------------result-------------")
# # HoLot = input("Nhap vao Ho Lot: ")
# # Ten = input("Nhap vao ten: ")
# # NamSinh = int(input("Nhap vao nam sinh: "))
# # print("Ho ten va Tuoi: " + HoLot+" "+Ten+" "+ str(date.today().year-NamSinh))
# # print("---------------end---------------")

# # str(date.today().year-NamSinh)

# #Cau 8
# # print("-------------result-------------")
# # string = "aaaaaaaaaple bbbbbbbbbbbbbbbanana ccccccccoconut"
# # print("so lan xuat hien cua ki tu a: "+ str(count(string.count("a"))))
# # print("so lan xuat hien cua ki tu b: "+ str(count(string.count("b"))))
# # print("so lan xuat hien cua ki tu c: "+ str(count(string.count("c"))))
# # print("---------------end---------------")

# #Cau 9
# # print("-------------result-------------")
# # stri = ("Hello                   Python             ! ")
# # string = " ".join(stri.split())
# # print(string);
# # print("---------------end---------------")
# # endregion

# #region Buoi 4

# # foodList = ["apple", "banana", "cherry"]
# # print(foodList)

# # foodList.append("pineapple")
# # print(foodList)

# # foodList.insert(1, "melon")
# # print(foodList)

# # foodList.remove("cherry")
# # print(foodList)

# #cau1:
# # print("==================================")
# isContinue = True
# numArray = [1,2,3,4,7,8,0]
# # while(isContinue):
# #      num = input("Nhap vao 1 so nguyen: ")
# #      numArray.append(num)
# #      continueVar = input("t de tiep tuc/ d de dung lai: ")
# #      if continueVar == 'd':
# #           isContinue = False

# # print("So lon nhat: " + str (max(numArray)))
# # print("So nho nhat: " + str(min(numArray)))
# # print("Tong cac phan tu: " + str(sum(numArray)))
# # print("==================================\n")

# #Cau 2:
# # print("==================================")
# # numArray[0] += 10
# # numArray[len(numArray) - 1] += 10
# # print("List sau khi +")
# # print(numArray)

# # numArray.pop()
# # print("Xoa phan tu cuoi")
# # print(numArray)

# # index = input("Nhap vi tri can xoa")
# # numArray.pop(int(index))
# # print("Sau khi xoa tai vi tri index")
# # print(numArray)

# # item = input("Nhap vao phan tu can xoa: ")
# # numArray.remove(int(item))
# # print("List sau khi xoa: ")
# # print(numArray)

# # numArray.clear()
# # print("Sau khi clear")
# # print(numArray)
# # print("==================================\n")

# #Cau 3: 

# # print("==================================")
# # print(numArray)
# # newArray = numArray.copy()
# # print("List sau khi sap xep tang dan: ")
# # numArray.sort()
# # print(numArray)
# # print("List sau khi sap xep giam dan: ")
# # numArray.sort(reverse=True) 
# # print(numArray)
# # print("List sau khi dao nguoc: ")
# # newArray.reverse()
# # print(newArray)
# # print("==================================\n")

# #Cau 4: 
# # print("==================================")
# # print("Cac so chan: ")
# # sum = 0
# # for x in range(1000):
# #      if(x%2==0): 
# #           print(x, end=" ") 
# #           sum+=x
# # print("Tong cac so chan: " + str(sum))
# # print("==================================\n")

# #Cau 5:
# # print("==================================")
# # n = int(input("Nhap n: "))
# # print("S = ", end='')
# # result = 0
# # for x in range(n):
# #      x+=1
# #      result += 1/x
# # print(result) 
# # print("==================================\n")

# #Cau 6
# # print("==================================")
# # n = int(input("Nhap n: "))
# # sum = 1
# # for i in range(n):
# #      i+=1
# #      sum *=i
# # print("n! = " + str(sum))

# # print("S = ", end='')
# # result = 0
# # for i in range(sum):
# #      i+=1
# #      result += 1/i

# # print(result)
# # print("==================================\n")

# # #Cau 7
# # print("==================================")
# # myList = []

# # for i in range(100):
# #   myList.append(random())

# # newArray = []
# # for index in range (9, len(myList)):
# #   newArray.append(index+1)

# # print("newArray: ", end=" " )
# # print(newArray)
# # sum=0
# # for i in range (len(newArray)):
# #   sum+=i
# # print("i= " + str(sum))

# # #Cau 9
# # num = int(input("Nhap vao 1 chuoi so: "))
# # if(num%2==0):
# #   print("So chan")
# # else:
# #   print("Khong phai so chan")

# # #Cau 10
# # num = 7
# # for i in range(1, num):
# #   if(num<=2):
# #     print("khong phai so nguyen to")
# #     break;
# #   if(num % i == 0):
# #     print("khong phai so nguyen to")
# #     break;
# #   print("La so nguyen to")
# #endregion

# #region Buoi x

# # Bai 9 
# isContinue = True;
# arr = [1,2,3,1,5,12,5,12,5,12,5,56,0]
# # while(isContinue):
# #   num = int(input("Nhap vao 1 so: "))
# #   if(num < 0):
# #     isContinue = False;
# #   else:
# #     arr.append(num)

# # print("Tan so xuat hien: ")
# # counter = Counter(arr);
# # print(counter.keys())
# # print(counter.values())

# # print("Xoa trung lap: ")


# # final_list = []
# # duplicate = arr.copy()
# # for num in duplicate:
# #   if num not in final_list:
# #     final_list.append(num)

# # print(final_list)

# # bai 10

# # mssv = input("mssv: ")
# # hoten = input("hoten: ")
# # ngaysinh = input("ngaysinh: ")
# # print("thong tin sv: ", end='')
# # print(mssv, " - ", hoten, " - ", ngaysinh)

# #bai 11
# # str = "12345678 - abc - 1812/1998"
# # array = str.split(" - ")

# # for item in array:
# #   item.strip()

# # print("thong tin sv: ")
# # print("mssv: ", array[0])
# # print("hoten: ", array[1])
# # print("ngaysinh: ", array[2])

# #bai 12 
# s = "1234Nguyen   Van binh@#"
# for c in "!@#%&*()[]{}/?<>1234567890":
#     st = s.replace(s, c, "")
# print(s)
# #endregion


#===================================================================
#Cau 2
#a

# def isPrime(num):
#     flag = False
#     if num > 1:
#         for i in range(2, num):
#             if (num % i) == 0:
#                 flag = True
#                 break

#         if flag:
#             print(num, "is not a prime number")
#         else:
#             print(num, "is a prime number")

# isPrime(11)

#b

# from turtle import end_fill


# def ioFile():
#     isContinue = True
#     fileIO = open("D:/Dev/Workspace/VSC/Python/songuyen.txt", 'a+')
    
#     while(isContinue):
#         num = input("Nhap 1 phan tu: ")
#         fileIO.write(num + " ")
        
#         signal = input("Dung lai bam e, E")
#         if(signal == 'e' or signal == 'E'):
#             break
    
#     fileIO = open("D:/Dev/Workspace/VSC/Python/songuyen.txt", 'r')
#     if(fileIO.mode == 'r'):
#         print("file dang mo")
#         data = fileIO.readline()
#         print(data)

# ioFile()

# Cau 3
#a

# def factorial(n):
#     fact = 1
    
#     for i in range(1,n+1):
#         fact = fact * i
        
#     print (fact)
#     return fact

# factorial(23)

#b

# def S(n):
#     s = 0
#     for i in range(n):
#         s+=1/(factorial(i+1))
#     print(s);

# S(5)

#Cau 4

#a + b
# import math


# def isTri(a,b,c):
#     if a+b>c and a+c>b and b+c>a:
#         print("la 3 canh cua tam giac")
#         p = (a + b + c) / 2
#         s = math.sqrt(p * (p - a) * (p - b) * (p -c))
#         print("dien tich tam giac: ", s)
#     else:
#         print("khong phai tam giac")

# isTri(5.7, 8.0, 5.7)

#c

str = "This is Python"

def isSubHandler(subStr):
   if str.count(subStr):
      return True;
   return False;

def isSub():
   subStr = "Python"
   if isSubHandler(subStr):
      print("True")
   else:
      print("False")

isSub()