type Dict<T> = Record<string, T>;
type Arrayable<T> = T | T[];
/** {@link https://github.com/sindresorhus/type-fest/blob/main/source/simplify.d.ts} */
type Simplify<T> = { [KeyType in keyof T]: T[KeyType] } & {};

declare function mri<
	TBoolean extends string = never,
	TString extends string = never
>(
	args?: string[],
	options?: {
		boolean?: Arrayable<TBoolean>;
		string?: Arrayable<TString>;
		alias?: Dict<Arrayable<string>>;
		default?: Dict<any>;
		unknown?(flag: string): void;
	}
): mri.Argv<TBoolean, TString>;

declare namespace mri {
	export interface Options {
		boolean?: Arrayable<string>;
		string?: Arrayable<string>;
		alias?: Dict<Arrayable<string>>;
		default?: Dict<any>;
		unknown?(flag: string): void;
	}

	export type Argv<
		TBoolean extends string = never,
		TString extends string = never
	> = Simplify<
		{
			[P in TBoolean]?: boolean;
		} & {
			[P in TString]?: string;
		} & {
			[x: string]: any;
			_: string[];
		}
	>;
}

export = mri;
