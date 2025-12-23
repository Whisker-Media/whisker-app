// Copyright 2025 Whisker Media Group
// Licensed under the Apache License, Version 2.0

import dotenv from "dotenv";

dotenv.config();

const serviceAccountKey = JSON.parse(process.env.FIREBASE_SERVICE_KEY);

export default serviceAccountKey;
