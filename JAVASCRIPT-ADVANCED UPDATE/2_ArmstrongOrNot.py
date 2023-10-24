# Write a python program to find Armstrong's number of three digits.

# Test Case 1:
# Enter a number: 663
# 663 is not an Armstrong number
# Test Case 2:
# Enter a number: 407
# 407 is an Armstrong number

def armstronornot():
    a=int(input("Enter a Number :"))
    x=a
    sum=0
    b=0
    while a>0:
        b=a%10
        sum=sum+b**3
        a=int(a/10)

    if sum==x:
        print(f"{x} is Armstrong number")
    else:
        print(f"{x} is not Armstrong number")

    print(sum)

armstronornot()


