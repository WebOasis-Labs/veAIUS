/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SubmitContestation,
  SubmitContestationInterface,
} from "../SubmitContestation";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IArbius",
        name: "_arbius",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_taskid",
        type: "bytes32",
      },
    ],
    name: "submitContestation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60803461007357601f61016c38819003918201601f19168301916001600160401b038311848410176100785780849260209460405283398101031261007357516001600160a01b0381169081900361007357600080546001600160a01b03191691909117905560405160dd908161008f8239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080806040526004361015601257600080fd5b600090813560e01c63671f815214602857600080fd5b3460a357602036600319011260a357815482906001600160a01b0316803b1560a35760248383819363338fc0a960e11b835260043560048401525af180156098576070575080f35b67ffffffffffffffff811160845760405280f35b634e487b7160e01b82526041600452602482fd5b6040513d84823e3d90fd5b5080fdfea2646970667358221220453795cd83d3d91b963d2905b28db63751e48cc2e205f51bb3e1d129a2ddd1c864736f6c63430008130033";

type SubmitContestationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SubmitContestationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SubmitContestation__factory extends ContractFactory {
  constructor(...args: SubmitContestationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _arbius: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SubmitContestation> {
    return super.deploy(
      _arbius,
      overrides || {}
    ) as Promise<SubmitContestation>;
  }
  getDeployTransaction(
    _arbius: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_arbius, overrides || {});
  }
  attach(address: string): SubmitContestation {
    return super.attach(address) as SubmitContestation;
  }
  connect(signer: Signer): SubmitContestation__factory {
    return super.connect(signer) as SubmitContestation__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SubmitContestationInterface {
    return new utils.Interface(_abi) as SubmitContestationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SubmitContestation {
    return new Contract(address, _abi, signerOrProvider) as SubmitContestation;
  }
}
