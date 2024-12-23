# Mini Email Sending API

An Express API to send emails using Gmail with Nodemailer.

## Setup

1. Clone the repo.
2. Install dependencies: `npm install`
3. Create a `.env` file from `.env.sample`

## Start Server

Run `npm start` (Server runs on http://localhost:3000).

## Usage

Send a POST request to `/send-email` with the following body:
```json
{
  "to": "recipient@example.com",
  "subject": "Subject",
  "text": "Email content"
}
```