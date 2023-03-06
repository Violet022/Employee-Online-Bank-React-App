import React from 'react';
import * as axios from 'axios';

const baseUrl = 'http://localhost:7239/api/';

const coreInstanse = axios.create({
    baseUrl : baseUrl
})