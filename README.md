Movie Page website

<br><br>
Introduction
Create a web panel consisting of four different pages and a global search in the Navbar.
Home Page / Popular Movie Page
Top Rated Page
Upcoming Movie Page
Single Movie Detail Page
Searched Movie Page (UI will be same as Home Page)

<br><br>

Instructions
Upload the project on Codesandbox (https://codesandbox.io/
) and submit it using the code sandbox link. This is mandatory, without this, the submission will not be accepted.
The project must be responsive with decent CSS.
It is not necessary that the colors should match the images above. Use your imagination and try to make it as you like.
Pagination is required.
Make sure the components are reusable wherever possible.
API Details
Generate your own api key by visiting
https://www.themoviedb.org/settings/api
Get all movies
https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1

For Image Path: You need to add a base domain which is given below

https://image.tmdb.org/t/p/w500

Eg: For your Reference

https://image.tmdb.org/t/p/w500/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpgbcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg


From API Get movie detail

https://api.themoviedb.org/3/movie/${movie_id}?api_key=${Api_key}&language=en-US


Get movie cast detail

https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${Api_key}&language=en-US

Get upcoming movies

https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=1

Get top-rated movies

https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_key}&language=en-US&page=1




Get search result

https://api.themoviedb.org/3/search/movie?api\_key=${Api\_key}&language=en-US&query=${movie\_name}&page=1




font name
- Poppins
- Inter

color
- #3d56d4
- #d4d4da
- black


Third-party packages
- react-icons
- react-loader-spinner
- react-router-dom
