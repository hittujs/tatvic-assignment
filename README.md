# Questions from the assessment round:

## Question : Why did you choose the particular tech stack/ DB/ cloud service over the other alternatives?

Tech stack used: React with typescript, react router dom for routing, material ui as component library and with makeStyle/useStyles hooks for styling, redux toolkit as store manager, React query, Google oAuth, Firestore Database for DB.

Alternatives were Next and tailwind (as next and material ui dont work well, we have to tweak in order to support emotion cache so thats why react + material ui was preferred.)
RTK over context as this is recommended option for global store as per the react docs. React query for data fetching and caching.

I chose Firebase Database as it is significantly faster than spinning up custom node server and traditional way of request response mechanism. 

## Question :Walk the interviewers through the code at a high level

So we have 2 modules. Dashboard and Search.

### Dashboard
Dashboard checks for the auth first and shows OAuth login button when user is not logged in.

When user logs in part of information is stored in redux store. We have boolean selectors that return true or false based on presence of user value in store. this selector is used as mechanism to check auth status at all levels of user interaction through different routes.

Dashboard features a tab list which queries data coming from firestore based on tab index. 7 days, 1 day, 1 hour and shows table for that.

There is a Chart component that makes use of react-google-chart library. Data from firestore is fetched and grouped in range of chart.


### Search

Search shows form to search a keyword, when form is submitted, data is fetched with help of react query hook and results are stored.

we store searched keyword along with data fetched in firestore via same react query hook using onSuccess callback.

When a result is clicked, it makes another API call and loads data for the keyword passed in location.

