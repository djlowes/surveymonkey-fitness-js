# surveymonkey-fitness-js
A survey app that asks respondents 4 (four) simple questions to find out what the best exercise class is in the Bay area.

## HTML Routes
* "/" **Index Page**: requires registration in order to take surveys
* "/register" **Registration Page**: user registration information is required
* "/home" **Homepage**: once authenticated, user can take survey and view results
* "/survey" **Survey Page**: embedded SurveyMonkey survey to collect responses
* "/results" **Results Page**: survey results from all respondents
* "/login" **Depricated -- unnecessary **


## API Routes
* "/api" **GET**: displays all surveys from a users account
* "/api/survey" **GET**: displays full information of this particular survey
* "/api/responses" **GET**: displays response data from all responses
* "/api/question-one" **GET**: displays single question information
* "/api/contacts" **GET**: displays a list of all contacts in the SurveyMonkey account
* "/api/contact-list" **POST**: creates a new contact list (details in request body)
* "/api/collector-responses" **GET**: displays specific response from specific collector (in this case, an email collector)
* "/api/send-survey" **POST**: creates multiple recipients to send survey to (commenting out because my random recipient IDs were real people!)
* "/api/rollups" **GET**: displays rollup response data which I have used to create response visualization
