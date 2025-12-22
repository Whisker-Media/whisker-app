// Copyright 2025 Whisker Media Group
// Licensed under the Apache License, Version 2.0

import dotenv from "dotenv";

dotenv.config();

const serviceAccountKey = {
  "type": "service_account",
  "project_id": "whisker-media",
  "private_key_id": "REMOVED_FOR_SECURITY_REASONS",
  "private_key": "REMOVED_FOR_SECURITY_REASONS",
  "client_email": "firebase-adminsdk-fbsvc@whisker-media.iam.gserviceaccount.com",
  "client_id": "REMOVED_FOR_SECURITY_REASONS",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40whisker-media.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
};

export default serviceAccountKey;
