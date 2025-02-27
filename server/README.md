# HacktivOverflow API


# Auth
In order to prevent data leaked. User need  Authentication in some places. Authentications that can be use are Register / Login.

If **Authentication is required**, add `access_token` on headers. You can get `access_token` from Authentication.
Headers:
```
{
	access_token: 'given_token'
}
```

## Register
URL:  `/user/register`
Method: `POST`
Status Code:  **`201`**

Data: 
```
{
  name : String,
  email : String
  password : String,
}
```

Response:
```
{
  access_token : String,
  payload : {
    _id: String,
    name : String,
    email: String,
    loginWith: String
  }
}
```

## Login
URL:  `/user/login`
Method: `POST`
Status Code:  **`200`**

Data: 
```
{
  email : "justarya@mail.com",
  password : "password"
}
```

Response:
```
{
  access_token : String,
  payload : {
    _id:  String,
    name: String,
    email: String,
    loginWith: "normal"
  }
}
```

## Login With Google
URL:  `/user/login/google`
Method: `POST`
Status Code:  **`200`**

Request (Example): 
```
{
  idToken : "token_from_google_oauth",
}
```

Response:
```
{
  access_token : String,
  payload : {
    _id:  String,
    name: String,
    email: String,
    loginWith: "google"
  }
}
```


## Get User Data
URL:  `/user/`
Method: `GET`
Status Code:  **`200`**
Authentication: `TRUE`

Response:
```
{
  _id: String,
  name : String,
  email: String,
  loginWith: "normal"
}
```
<br/>

# Question
## Create Question
Url: `/question`
Method: `POST`
Status: `201`
Authentication: `REQUIRED`

Data:
```
{
  title: String,
  description: String,
  tags: Array,
}
```

Response: 
```
{
  _id: String,
  title: String,
  description: String,
  upvotes: Array,
  downvotes: Array,
  answers: Array,
  tags: Array,
  comments: Array,
  user: {
    _id: String,
    name: String,
    email: String,
  },
  createdAt: Date,
  updatedAt: Date,
}
```

Error:
- 403:
  - Title cannot be empty
  - \<Field\> must be \<Type\>

- 401:
  - User must login

## Edit Question
Url: `/question/:id`
Method: `PUT`
Status: `200`
Authentication: `REQUIRED`

Data:
```
{
  title: String,
  description: String,
  tags: Array,
}
```

Response: 
```
{
  _id: String,
  title: String,
  description: String,
  upvotes: Array,
  downvotes: Array,
  answers: Array,
  tags: Array,
  comments: Array,
  user: {
    _id: String,
    name: String,
    email: String,
  },
  createdAt: Date,
  updatedAt: Date,
}
```
Error: 
- 404
  - Question not found
- 403: 
  - Title cannot be empty
  - \<Field\> must be \<Type\>

- 401:
  - User must login

## Delete Question
Url: `/question/:id`
Method: `DELETE`
Status: `200`
Authentication: `REQUIRED`

Response: 
```
{
  delete: 1,
  message: 'Successfully Delete Question',
}
```
Error: 
- 404: 
  - Question not found

- 401:
  - User must login

## Upvote Question
Url: `/question/:id/upvote`
Method: `PATCH`
Status: `200`
Authentication: `REQUIRED`

Response: 
```
{
  success: Number,
  message: 'Upvote Success!',
}
```
Error: 
- 404
  - Question not found
- 401:
  - User must login

## Netral Vote Question
Url: `/question/:id/netralvote`
Method: `PATCH`
Status: `200`
Authentication: `REQUIRED`

Response: 
```
{
  success: Number,
  message: 'Netral vote Success!',
}
```
Error: 
- 404
  - Question not found
- 401:
  - User must login

## Downvote Question
Url: `/question/:id/downvote`
Method: `PATCH`
Status: `200`
Authentication: `REQUIRED`

Response: 
```
{
  success: Number,
  message: 'Upvote Success!',
}
```
Error: 
- 404
  - Question not found
- 401:
  - User must login

## Find All Question
Url: `/question`
Method: `GET`
Status: `200`

Response: 
```
[
  {
    _id: String,
    title: String,
    description: String,
    upvotes: Array,
    downvotes: Array,
    answers: Array,
    tags: Array,
    comments: Array,
    user: {
      _id: String,
      name: String,
      email: String,
    },
    createdAt: Date,
    updatedAt: Date,
  },
  ...
]
```

## Search Question
Url: `/question?search=keyword`
Method: `GET`
Status: `200`

Response: 
```
[
  {
    _id: String,
    title: String,
    description: String,
    upvotes: Array,
    downvotes: Array,
    answers: Array,
    tags: Array,
    comments: Array,
    user: {
      _id: String,
      name: String,
      email: String,
    },
    createdAt: Date,
    updatedAt: Date,
  },
  ...
]
```
## Find All My Question
Url: `/question/my`
Method: `GET`
Status: `200`
Authentication: `REQUIRED`

Response: 
```
[
  {
    _id: String,
    title: String,
    description: String,
    upvotes: Array,
    downvotes: Array,
    answers: Array,
    tags: Array,
    comments: Array,
    user: {
      _id: String,
      name: String,
      email: String,
    },
    createdAt: Date,
    updatedAt: Date,
  },
  ...
]
```

## Find One Question
Url: `/question/:id`
Method: `GET`
Status: `200`

Response: 
```
{
  _id: String,
  title: String,
  description: String,
  upvotes: Array,
  downvotes: Array,
  answers: Array,
  tags: Array,
  comments: Array,
  user: {
    _id: String,
    name: String,
    email: String,
  },
  createdAt: Date,
  updatedAt: Date,
}
```
Error: 
- 404: 
  - Question not found

## Get Top Question
Url: `/question/top`
Method: `GET`
Status: `200`

Response: 
```
{
  _id: String,
  title: String,
  description: String,
  upvotes: Array,
  downvotes: Array,
  answers: Array,
  tags: Array,
  comments: Array,
  user: {
    _id: String,
    name: String,
    email: String,
  },
  createdAt: Date,
  updatedAt: Date,
}
```
Error: 
- 404: 
  - Question not found

# Answer
## Create Answer
Url: `/question/:id/answer/`
Method: `POST`
Status: `201`
Authentication: `REQUIRED`

Data:
```
{
  title: String,
  description: String
}
```

Response: 
```
{
  _id: String,
  title: String,
  description: String,
  upvotes: Array,
  downvotes: Array,
  comments: Array,
  user: {
    _id: String,
    name: String,
    email: String,
  },
  createdAt: Date,
  updatedAt: Date,
}
```

Error:
- 403:
  - Title cannot be empty
  - \<Field\> must be \<Type\>

- 401:
  - User must login

## Edit Answer
Url: `/question/:idquestion/answer/:idanswer`
Method: `PUT`
Status: `200`
Authentication: `REQUIRED`

Data:
```
{
  title: String,
  description: String
}
```

Response: 
```
{
  _id: String,
  title: String,
  description: String,
  upvotes: Array,
  downvotes: Array,
  comments: Array,
  user: {
    _id: String,
    name: String,
    email: String,
  },
  createdAt: Date,
  updatedAt: Date,
}
```
Error: 
- 404
  - Answer not found
- 403: 
  - Title cannot be empty
  - \<Field\> must be \<Type\>

- 401:
  - User must login

## Delete Answer
Url: `/question/:idquestion/answer/:idanswer`
Method: `DELETE`
Status: `200`
Authentication: `REQUIRED`

Response: 
```
{
  delete: 1,
  message: 'Successfully Delete Answer',
}
```
Error: 
- 404: 
  - Answer not found

- 401:
  - User must login

## Upvote Answer
Url: `/question/:idquestion/answer/:idanswer/upvote`
Method: `PATCH`
Status: `200`
Authentication: `REQUIRED`

Response: 
```
{
  success: Number,
  message: 'Upvote Success!',
}
```
Error: 
- 404
  - Answer not found
- 401:
  - User must login

## Netral Vote Answer
Url: `/question/:idquestion/answer/:idanswer/netralvote`
Method: `DELETE`
Status: `200`
Authentication: `REQUIRED`

Response: 
```
{
  success: Number,
  message: 'Netral vote Success!',
}
```
Error: 
- 404
  - Answer not found
- 401:
  - User must login

## Downvote Answer
Url: `/question/:idquestion/answer/:idanswer/downvote`
Method: `PATCH`
Status: `200`
Authentication: `REQUIRED`

Response: 
```
{
  success: Number,
  message: 'Downvote Success!',
}
```
Error: 
- 404
  - Answer not found
- 401:
  - User must login

<!-- ## Find All Answer
Url: `/question/:idquestion/answer`
Method: `GET`
Status: `200`

Response: 
```
[
  {
    _id: String,
    title: String,
    description: String,
    upvotes: Array,
    downvotes: Array,
    comments: Array,
    user: String,
    createdAt: Date,
    updatedAt: Date,
  },
  ...
]
```

## Search Answer
Url: `/question/:idquestion/answer?search=keyword`
Method: `GET`
Status: `200`

Response: 
```
[
  {
    _id: String,
    title: String,
    description: String,
    upvotes: Array,
    downvotes: Array,
    comments: Array,
    user: String,
    createdAt: Date,
    updatedAt: Date,
  },
  ...
]
```

## Find One Answer
Url: `/question/:idquestion/answer/:idanswer`
Method: `GET`
Status: `200`

Response: 
```
{
  _id: String,
  title: String,
  description: String,
  upvotes: Array,
  downvotes: Array,
  comments: Array,
  user: String,
  createdAt: Date,
  updatedAt: Date,
}
```
Error: 
- 404: 
  - Answer not found -->

# Comment
## Create comment on Answer
Url: `/question/:idquestion/answer/:idanswer/comment`
Method: `POST`
Status: `201`
Authentication: `REQUIRED`

Data:
```
{
  text: String,
}
```

Response: 
```
{
  _id: String,
  text: String,
  user: Object,
  createdAt: Date,
  updatedAt: Date,
}
```

Error:
- 404: 
  - Answer not found
- 403:
  - Text cannot be empty
  - \<Field\> must be \<Type\>

- 401:
  - User must login

## Create comment on Question
Url: `/question/:idquestion/comment`
Method: `POST`
Status: `201`
Authentication: `REQUIRED`

Data:
```
{
  text: String,
}
```

Response: 
```
{
  _id: String,
  text: String,
  user: Object,
  createdAt: Date,
  updatedAt: Date,
}
```

Error:
- 404: 
  - Question not found
- 403:
  - Text cannot be empty
  - \<Field\> must be \<Type\>

- 401:
  - User must login

## Edit Comment
Url: `/comment/:id`
Method: `PUT`
Status: `200`
Authentication: `REQUIRED`

Data:
```
{
  text: String
}
```

Response: 
```
{
  _id: String,
  text: String,
  user: String,
  createdAt: Date,
  updatedAt: Date,
}
```
Error: 
- 404
  - Comment not found
- 403: 
  - Text cannot be empty
  - \<Field\> must be \<Type\>

- 401:
  - User must login

## Delete Comment
Url: `/comment/:id`
Method: `DELETE`
Status: `200`
Authentication: `REQUIRED`

Response: 
```
{
  delete: 1,
  message: 'Successfully Delete Comment',
}
```
Error: 
- 404: 
  - Comment not found

- 401:
  - User must login

<!-- # Tag
## Get User Watched Tag
URL:  `/user/tag`
Method: `GET`
Status Code:  **`200`**
Authentication: `TRUE`

Response:
```
{
  watched_tag: []
}
```
<br/>

## Add Watched Tag
URL:  `/tag/`
Method: `POST`
Status Code:  **`200`**
Authentication: `TRUE`

Data:
```
{
  tag: 'Tag'
}
```

Response:
```
{
  success: Number,
  message: 'Success Add Watched Tag'
}
```
<br/>

## Delete Watched Tag
URL:  `/tag/:tag`
Method: `DELETE`
Status Code:  **`200`**
Authentication: `TRUE`

Response: 
```
{
  delete: 1,
  message: 'Successfully Delete Question',
}
```
Error: 
- 404: 
  - Question not found

- 401:
  - User must login

<br/>

## View Question by Tag
Url: `/tag/:tag`
Method: `GET`
Status: `200`

Response: 
```
[
  {
    _id: String,
    title: String,
    description: String,
    upvotes: Array,
    downvotes: Array,
    answers: Array,
    tags: Array,
    comments: Array,
    user: {
      _id: String,
      name: String,
      email: String,
    },
    createdAt: Date,
    updatedAt: Date,
  },
  ...
]
``` -->

# Error handler

```
{
  error: 'message',
}
```