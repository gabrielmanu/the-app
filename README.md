## Date:
User {
  Id: string, (GUID)
  Name: string,
  Level: string,
  Tests:[
    {
      Date: number;
      Results: [
        {
          Type: "Flotari",
          Score: 25,
          SelfAns: 0
        }
      ]    
    }
  ]
}

// JSON Exterior:
Exercise {
  Id: string, (GUID)
  Name: "Flotari",
  Description: string,
  Levels: [
    {
      Id: string, (GUID)
      Level: "Intermediar",
      TargetMin: 25,
      TargetMax: 45,
    },
    {
      Id: string, (GUID) 
      Level: "beginner",
      TargetMin: 0,
      TargetMax: 24,
    }
  ]
}


## Sreens (Pages, routes)
Screen 0: IF > daca exista user > Screen 2: ELSE > Get User Name > Screen 1

Screen 1: Get started:
Form-ul
Salvare date user

Screen 2:
Programul zilei

Screen 3: User Details
Input pt Nume



/ verific daca exista user ()




## Structura de foldere:

app/
  /components/ 
  - UserLogin
  - Test
  - DailyProgram
  - UserDetails

  - UserResponse
/services/
  - UserService
    - saveUserDetails()
    - getUserDetails()
    - addTest
    - getTests
  - ProgramService
    - private loadExercises
    - getDailyExercise()

assets/
  /data/
    exercises.json


    
## keywords, code samples:


//  cfe thinking process:
1. ma uit dupa date. ce tipuri de date consuma aplicatia mea?
 - care sunt serviciile care se ocupa de fiecare identitate de date?

2. Screens Logic