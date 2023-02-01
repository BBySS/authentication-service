import * as cdk from 'aws-cdk-lib';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import { Construct } from 'constructs';

export class AuthenticationServiceStack  extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const pool = new cognito.UserPool(this, 'AuthServiceUserPool', {
            userPoolName: 'auth-service-userpool',
            signInCaseSensitive: false,
            selfSignUpEnabled: true,
            signInAliases: {
                email: true,
                username: true,
            },
          });

          pool.addDomain('CognitoDomain', {
            cognitoDomain: {
              domainPrefix: 'open-parliament',
            },
          });

          pool.addClient('pool-client', {
            oAuth: {
                flows: {
                    implicitCodeGrant: true,
                }
            },
            supportedIdentityProviders: [
                cognito.UserPoolClientIdentityProvider.COGNITO,
            ]
          });
    }
}
