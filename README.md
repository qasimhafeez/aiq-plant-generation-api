## README

---

# Power Plant Generation Visualization APIon Data

data: https://www.epa.gov/egrid/download-data

Note: I found 2022 data is also available but as strictly following the document, I used 2021 eGRID_data in this application.

## Overview

This project provides a RESTful API built in TypeScript, designed to support a web-based map visualization of the top N power plants in the US based on their annual net generation. The map allows users to view absolute values of some key points in data file, with the ability to filter by state for more detailed exploration.

## Installation

1. **Build the Docker container:**

   ```bash
   docker-compose build
   ```

2. **Run the application:**
   ```bash
   docker-compose up
   ```

## API Reference

### Endpoints

**Get Top N Power Plants:** `/api/plants/:topN` (topN = 25 for visualization purpose on react app)

**Method:** `GET`

**Plants by state:** `/api/plants/:state` (return all plants by state)

- **Code:** 200
- **Content:** JSON array of power plants, each including the plant's name, annual net generation.

**Error Response:**

- **Code:** 400 BAD REQUEST
- **Content:** `{ error: "Invalid parameters" }`

## Room for improvements

- **Caching:** Implement caching mechanisms to improve response times for frequently accessed data.
- **Database Storage** For production level application, it is necessary to have this data stored into db and only cache the most used api enpoints for performance
- **Logging and Monitoring** different logs should be implemented throught the application so that application throw warning and we can fix that issue asap.
- **Test Cases** Test cases should be present.
- **Authentication:** Add authentication to protect the API and ensure that only authorized users can access sensitive data.
- **Dynamic Filtering:** We can also add dynamic filtering to get the desired api response
- **code optimization** There is always a room for optimization and we can enhance time and space complexity by using optimal approach (For example - reading data from xlsx file in chunks or doing lazy loading)

## Thank You
