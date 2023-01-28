#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AuthenticationServiceStack } from '../lib/AuthenticationServiceStack';

const app = new cdk.App();
new AuthenticationServiceStack(app, 'AuthenticationService', {});