# Open the Que_4 Complete the Incomplete code and paste your full code below.

# Expected Output:
# Enter the number of Rows:5
# * 
# * * 
# * * * 
# * * * * 
# * * * * * 

a=int(input("Enter the number of Rows :"))

for i in range(a):
    for j in range(i+1):
        print("*",end=" ")
    print("\n")