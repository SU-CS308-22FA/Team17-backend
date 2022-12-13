# Team17-back-end - front-end

1.1 FANATIKA

1.2 URL for your server

    https://fanatika.herokuapp.com/#/

1.3 Description of the Project: Users earn points by solving daily special quizzes of the football team they are a fan of. With these points, there is a ranking of users specific to each team. Users who are in the top three monthly rankings will receive special rewards for their team. These rewards are specially added by the admins of the teams. Users can create blogs, discuss and interact with each other about football. Users can find news and information specific to their team in their profiles.

1.4.1 How to install the software?

      First, the user will git.clone to download the project, and his/her computer will have pulled the code.

1.4.2 How to run the software?

      User needs to install virtualenv for back-end
      
      To download it, the user has to pip install virtualenv and then enter the command virtualenv mypython. 
      
      Next, it needs to activate mypthon\Scripts\activate. 
      
      The user needs to run the command pip install -r requirements.txt to download the requirement documentation.
      
      Then the user will do python manage.py runserver, which is the last command to run.
      
1.4.3 How to report a bug?

      Users can report bugs to fanatika@gmail.com

1.4.4 Bugs->

             1-) While the user or admin is logging out, some pages are stuck but logged out. 
             
             2-) The application gives a score of one less than the correct answers of the user in the quiz. When there are 3 correct answers, it counts 2 correct and gives 2 points.
             
1.5.1 How to obtain the source code?

      Front-end and Back-end codes are kept on the same repositories. When we open the code part, there are 2 different folders,front-end and back-end. 
      
      Source codes are in them. You can enter the front-end and back-end files via the terminal with the cd command and perform the necessary operations.

1.5.2   The layout of the directory structure. 

         1-) For front-end, you need to go to the frontend folder and go to the src folder, under it, there is the actions
          folder to provide the back-end connection (Redux). 
          
         Constants part is changing thanks to the actions above.
         
         Reducers change from here with APIs and finally the states are changed.
         
         Certain components appear in the Components section, such as header.
         
         The UI parts of the pages are in the screens section.
         
         The main part that makes them navigate and run the code is APP.js.
         
         2-) For the back-end, the files in the backend folder are used. 
         
         In this section there is setting.py. In this .py, the location of the database and the APIs we open in the back-end are kept there. Static files are routed from this section.
         
         Authetication parts are provided from this part.
         
         The urls parts of the urls.py back-end part are provided from this part.
         
         It creates model.py serializer.py and views.py APIs in the base folder.
         
1.5.3  How to build and deploy the software?

       1-) For the front-end part, the npm run build command should be typed into the terminal.

       2-) For back-end, python manage.py collectstatic command should be typed into terminal.
       
       3-) Github code needs to be pushed
       
       4-) Afterwards, the application will be deployed by pressing the deploy button from the heroku website manually.
