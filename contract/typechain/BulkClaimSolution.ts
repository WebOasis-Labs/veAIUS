/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface BulkClaimSolutionInterface extends utils.Interface {
  functions: {
    "claimSolutionBulk(bytes32[],uint256)": FunctionFragment;
    "engine()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "claimSolutionBulk",
    values: [BytesLike[], BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "engine", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "claimSolutionBulk",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "engine", data: BytesLike): Result;

  events: {};
}

export interface BulkClaimSolution extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BulkClaimSolutionInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    claimSolutionBulk(
      taskids_: BytesLike[],
      gas_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    engine(overrides?: CallOverrides): Promise<[string]>;
  };

  claimSolutionBulk(
    taskids_: BytesLike[],
    gas_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  engine(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    claimSolutionBulk(
      taskids_: BytesLike[],
      gas_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    engine(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    claimSolutionBulk(
      taskids_: BytesLike[],
      gas_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    engine(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    claimSolutionBulk(
      taskids_: BytesLike[],
      gas_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    engine(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
