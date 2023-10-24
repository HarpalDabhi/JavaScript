# Write a python program to check the Leap Year.

# Test Case 1:
# Enter the year: 2017
# 2017 is not a leap year.
# Test Case 2:
# Enter the year: 2012
# 2012 is a leap year.

year = int(input('Enter year : '))
 
if (year%4 == 0 and year%100 != 0) or (year%400 == 0) :
    print(year, "is a leap year.")
else :
    print(year, "is not a leap year.")
