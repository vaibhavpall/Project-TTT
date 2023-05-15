# Task to perform

Process - You need to attempt the Assignment of Terribly Tiny Tales as per the details mentioned below.

Develop a frontend in Reactjs or Nextjs, which does the following:
1. On first load, only has a Submit button
2. On clicking on Submit, it will fetch the contents of https://www.terriblytinytales.com/test.txt
3. Parse the content and find the frequency of occurrence of each word (some words will occur only once, some twice and so on, and some will occur N times)
4. Then on the frontend, plot a histogram of the 20 most occurring words.
5. Also build an "Export" button, which when clicked will download a CSV file of the histogram data.

X-axis = top 20 words with highest occurrence Y-axis = how many times they occurred in the file



## Expected solution: 

1. The source code should be uploaded to github along with a readme file. Readme must explain components of the code and mention all libraries and plugins used.

2. Extra points for hosting this solution on Heroku/Netlify or somewhere online. All details must be on the github readme.



### React installation:
            Installation Command: npx create-react-app project
            Dependencies Installation Command: (i)npm i react-csv
                                               (ii)npm i recharts
            Run command: npm start



#### Approach
            1. To process the data, the first step was to fetch it using a promise with async-await. Next, the data was converted into text and then split into individual words using a regular expression ("/\s{=tex}+/"), which removed any unwanted characters such as whitespaces or commas.

            2. To count the occurrence of each word, the array of words was reduced into a map. The map was then sorted in descending order based on the count of each word. The first 20 most occurring words were sliced from the map and updated in the state.

            3. After updating the state, it was passed to a CSV link to enable exporting. Finally, using the updated state, a barchart was created using the recharts library.



##### Libraries Used

1. Hooks (useState):
                    a. Fetched the data from the text 
                    b. Update the final data by using useState hook to give the data to the csv file.
                    

2. CSV:
       A CSV (comma-separated values) file is a text file that has a specific format which allows data to be saved in a table structured format.

       Command: npm install react-csv

3. recharts (Histogram): 
             The main purpose of this library is to help you to write charts in React applications without any pain.
             **I recharts for: BarChart
                               Bar
                               XAxis
                               YAxis
                               Tooltip
                               Legend 
    
            Command: npm install recharts



###### About Myself

Hello, My name is Vaibhav Pal.
I am a Front-End Web Developer with a good knowledge of designing and builing web pages.
Build a live website project with 2 friends from the scratch (Website link: https://parindey7.com/)

-> To know more:
    GitHub link: https://github.com/vaibhavpall


    THANK YOU 😀



