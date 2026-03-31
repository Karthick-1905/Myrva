### Worker API Endpoints

| Domain | Method | Endpoint | Description | Auth Required | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Auth & Onboarding | POST | `/api/v1/auth/register` | Creates a new worker profile, initiates KYC, and returns a JWT. | No | Pending |
| Auth & Onboarding | POST | `/api/v1/auth/login` | Authenticates a worker via phone/OTP and returns a JWT. | No | Pending |
| Auth & Onboarding | POST | `/api/v1/auth/logout` | Invalidate the current JWT session (optional based on JWT implementation). | Yes (Worker) | Pending |
| Worker Profile | GET | `/api/v1/workers/me` | Retrieves the logged-in worker's details, zone, and baseline income. | Yes (Worker) | Pending |
| Worker Profile | PUT | `/api/v1/workers/me` | Updates worker profile details (e.g., changing delivery zones or bank details). | Yes (Worker) | Pending |
| Quoting & Pricing | GET | `/api/v1/quotes` | Fetches the worker's dynamic weekly premium quotes for all available tiers. | Yes (Worker) | Pending |
| Policy Management | GET | `/api/v1/policies/tiers` | Returns the static list of available coverage tiers (e.g., Basic, Standard). | Yes (Worker) | Pending |
| Policy Management | POST | `/api/v1/policies/activate` | Purchases a policy using a specific tier ID and quoted premium. | Yes (Worker) | Pending |
| Policy Management | GET | `/api/v1/policies/current` | Returns the details and status of the worker's currently active 7-day policy. | Yes (Worker) | Pending |
| Policy Management | GET | `/api/v1/policies/history` | Retrieves a list of all expired or past policies held by the worker. | Yes (Worker) | Pending |
| Claims & Payouts | GET | `/api/v1/claims` | Fetches the history of all automated claims/payouts for the worker. | Yes (Worker) | Pending |
| Claims & Payouts | GET | `/api/v1/claims/:claimId` | Retrieves granular transaction details and trigger info for a specific claim. | Yes (Worker) | Pending |


### Admin API Endpoints

| Domain | Method | Endpoint | Description | Auth Required | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Admin Portal | GET | `/api/v1/admin/stats` | Aggregates platform metrics: active policies, total payouts, and loss ratio. | Yes (Admin) | Pending |
| Admin Portal | GET | `/api/v1/admin/workers` | Lists all registered workers and their current risk profiles/status. | Yes (Admin) | Pending |
| Admin Portal | GET | `/api/v1/admin/claims` | Lists all platform claims, including those flagged for manual review. | Yes (Admin) | Pending |
| Admin Portal | PUT | `/api/v1/admin/claims/:claimId/review` | Allows an admin to manually approve or reject a claim flagged by the fraud engine. | Yes (Admin) | Pending |