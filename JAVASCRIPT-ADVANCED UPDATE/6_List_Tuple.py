# Que_6	Write python program to list into tuple.

# Expected Output:
# x=[1,2,3,4,5]
# x=(1,2,3,4,5)	

x=[]
n=int(input("How many elements you want to add to the list :"))
for i in range(n):
    x.append(i)
    x[i]=input("Enter Element :")

print(x)

print("Converting into the tuple")

t1=tuple(x)

print(t1)
