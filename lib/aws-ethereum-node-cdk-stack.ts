import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as en from '@cdklabs/cdk-ethereum-node'

export class AwsEthereumNodeCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const ethereum_node = new en.EthereumNode(this, 'node', {
      network: en.Network.GOERLI,
      instanceType: en.InstanceType.STANDARD5_XLARGE,
      availabilityZone: 'ap-southeast-1a'
    })
  }
}
