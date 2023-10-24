# Write a Python user-defined function that accepts a string and calculates the number of upper case letters and lower case letters.

# Test Case:
# Sample String: 'RK University'
# Expected Output:
# No. of Upper case characters : 3
# No. of Lower case Characters: 9

def uploletter():
    a=input("Enter a string : ")
    u=0;l=0
    for i in a:
        if i.isupper():
            u+=1
        elif i.islower():
            l+=1
    print(u,l)

print(uploletter())