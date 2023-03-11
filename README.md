# Questions from the assessment round:

## Question : Why did you choose the particular tech stack/ DB/ cloud service over the other alternatives?

Tech stack used: React with typescript, react router dom for routing, material ui as component library and with makeStyle/useStyles hooks for styling, redux toolkit as store manager, React query, Google oAuth, Firestore Database for DB.

Alternatives were Next and tailwind (as next and material ui dont work well, we have to tweak in order to support emotion cache so thats why react + material ui was preferred.)
RTK over context as this is recommended option for global store as per the react docs. React query for data fetching and caching.

I chose Firebase Database as it is significantly faster than spinning up custom node server and traditional way of request response mechanism. 
