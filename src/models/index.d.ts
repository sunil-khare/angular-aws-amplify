import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class TEST {
  readonly id: string;
  readonly FirstName?: string;
  readonly LastName?: string;
  constructor(init: ModelInit<TEST>);
  static copyOf(source: TEST, mutator: (draft: MutableModel<TEST>) => MutableModel<TEST> | void): TEST;
}