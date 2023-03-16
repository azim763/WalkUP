/*
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */

var config = {
  apiKey: "AIzaSyAZ0LxhvUmCEGi7bf9hH1okU0Arvi_Ch_E",
  authDomain: "walkup-ibi.firebaseapp.com",
   databaseURL: "https://walkup-ibi-default-rtdb.firebaseio.com",
  projectId: "walkup-ibi",
  storageBucket: "walkup-ibi.appspot.com",
  messagingSenderId: "658025246463",
  appId: "1:658025246463:web:8269679d7dcb229e6f66ca",
  measurementId: "G-24VGMN29QG"
};
firebase.initializeApp(config);


// Google OAuth Client ID, needed to support One-tap sign-up.
// Set to null if One-tap sign-up is not supported.
var CLIENT_ID =
    'YOUR_OAUTH_CLIENT_ID';
