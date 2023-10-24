# Write a Python program to take user input as a string. Convert the string into the list elements. Find the length of each element and check the ODD and EVEN.

# Test Case:
# Enter any string: I love Python Programming
# Expected Output:
# [‘I’,‘love’,‘Python’,‘Programming’]
# I = 1 = ODD
# love = 4 = EVEN
# Python = 6 = EVEN
# Programming = 11 = ODD

a=input("Enter any string :")
a=a.split(" ")
print(a)

for i in a:
    if len(i)%2==0:
        print(f" {i} = {len(i)} = EVEN")
    elif len(i)%2!=0:
        print(f" {i} = {len(i)} = ODD")
        
