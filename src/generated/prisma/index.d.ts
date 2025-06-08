
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model CategorieAnnonce
 * 
 */
export type CategorieAnnonce = $Result.DefaultSelection<Prisma.$CategorieAnnoncePayload>
/**
 * Model Annonces
 * 
 */
export type Annonces = $Result.DefaultSelection<Prisma.$AnnoncesPayload>
/**
 * Model Galerie
 * 
 */
export type Galerie = $Result.DefaultSelection<Prisma.$GaleriePayload>
/**
 * Model AnnonceSection
 * 
 */
export type AnnonceSection = $Result.DefaultSelection<Prisma.$AnnonceSectionPayload>
/**
 * Model Horaire
 * 
 */
export type Horaire = $Result.DefaultSelection<Prisma.$HorairePayload>
/**
 * Model Histoire
 * 
 */
export type Histoire = $Result.DefaultSelection<Prisma.$HistoirePayload>
/**
 * Model Commerce
 * 
 */
export type Commerce = $Result.DefaultSelection<Prisma.$CommercePayload>
/**
 * Model CommerceSection
 * 
 */
export type CommerceSection = $Result.DefaultSelection<Prisma.$CommerceSectionPayload>
/**
 * Model CommerceGalerie
 * 
 */
export type CommerceGalerie = $Result.DefaultSelection<Prisma.$CommerceGaleriePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TypeSection: {
  TITRE: 'TITRE',
  PARAGRAPHE: 'PARAGRAPHE',
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO'
};

export type TypeSection = (typeof TypeSection)[keyof typeof TypeSection]


export const TypeCommerce: {
  MAGASIN: 'MAGASIN',
  BOUCHERIE: 'BOUCHERIE'
};

export type TypeCommerce = (typeof TypeCommerce)[keyof typeof TypeCommerce]

}

export type TypeSection = $Enums.TypeSection

export const TypeSection: typeof $Enums.TypeSection

export type TypeCommerce = $Enums.TypeCommerce

export const TypeCommerce: typeof $Enums.TypeCommerce

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CategorieAnnonces
 * const categorieAnnonces = await prisma.categorieAnnonce.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more CategorieAnnonces
   * const categorieAnnonces = await prisma.categorieAnnonce.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.categorieAnnonce`: Exposes CRUD operations for the **CategorieAnnonce** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategorieAnnonces
    * const categorieAnnonces = await prisma.categorieAnnonce.findMany()
    * ```
    */
  get categorieAnnonce(): Prisma.CategorieAnnonceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.annonces`: Exposes CRUD operations for the **Annonces** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Annonces
    * const annonces = await prisma.annonces.findMany()
    * ```
    */
  get annonces(): Prisma.AnnoncesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.galerie`: Exposes CRUD operations for the **Galerie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Galeries
    * const galeries = await prisma.galerie.findMany()
    * ```
    */
  get galerie(): Prisma.GalerieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.annonceSection`: Exposes CRUD operations for the **AnnonceSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnnonceSections
    * const annonceSections = await prisma.annonceSection.findMany()
    * ```
    */
  get annonceSection(): Prisma.AnnonceSectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.horaire`: Exposes CRUD operations for the **Horaire** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Horaires
    * const horaires = await prisma.horaire.findMany()
    * ```
    */
  get horaire(): Prisma.HoraireDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.histoire`: Exposes CRUD operations for the **Histoire** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Histoires
    * const histoires = await prisma.histoire.findMany()
    * ```
    */
  get histoire(): Prisma.HistoireDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commerce`: Exposes CRUD operations for the **Commerce** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commerce
    * const commerce = await prisma.commerce.findMany()
    * ```
    */
  get commerce(): Prisma.CommerceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commerceSection`: Exposes CRUD operations for the **CommerceSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommerceSections
    * const commerceSections = await prisma.commerceSection.findMany()
    * ```
    */
  get commerceSection(): Prisma.CommerceSectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commerceGalerie`: Exposes CRUD operations for the **CommerceGalerie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommerceGaleries
    * const commerceGaleries = await prisma.commerceGalerie.findMany()
    * ```
    */
  get commerceGalerie(): Prisma.CommerceGalerieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    CategorieAnnonce: 'CategorieAnnonce',
    Annonces: 'Annonces',
    Galerie: 'Galerie',
    AnnonceSection: 'AnnonceSection',
    Horaire: 'Horaire',
    Histoire: 'Histoire',
    Commerce: 'Commerce',
    CommerceSection: 'CommerceSection',
    CommerceGalerie: 'CommerceGalerie',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "categorieAnnonce" | "annonces" | "galerie" | "annonceSection" | "horaire" | "histoire" | "commerce" | "commerceSection" | "commerceGalerie" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CategorieAnnonce: {
        payload: Prisma.$CategorieAnnoncePayload<ExtArgs>
        fields: Prisma.CategorieAnnonceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategorieAnnonceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorieAnnoncePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategorieAnnonceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorieAnnoncePayload>
          }
          findFirst: {
            args: Prisma.CategorieAnnonceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorieAnnoncePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategorieAnnonceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorieAnnoncePayload>
          }
          findMany: {
            args: Prisma.CategorieAnnonceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorieAnnoncePayload>[]
          }
          create: {
            args: Prisma.CategorieAnnonceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorieAnnoncePayload>
          }
          createMany: {
            args: Prisma.CategorieAnnonceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategorieAnnonceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorieAnnoncePayload>[]
          }
          delete: {
            args: Prisma.CategorieAnnonceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorieAnnoncePayload>
          }
          update: {
            args: Prisma.CategorieAnnonceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorieAnnoncePayload>
          }
          deleteMany: {
            args: Prisma.CategorieAnnonceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategorieAnnonceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategorieAnnonceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorieAnnoncePayload>[]
          }
          upsert: {
            args: Prisma.CategorieAnnonceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategorieAnnoncePayload>
          }
          aggregate: {
            args: Prisma.CategorieAnnonceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategorieAnnonce>
          }
          groupBy: {
            args: Prisma.CategorieAnnonceGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategorieAnnonceGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategorieAnnonceCountArgs<ExtArgs>
            result: $Utils.Optional<CategorieAnnonceCountAggregateOutputType> | number
          }
        }
      }
      Annonces: {
        payload: Prisma.$AnnoncesPayload<ExtArgs>
        fields: Prisma.AnnoncesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnoncesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnoncesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncesPayload>
          }
          findFirst: {
            args: Prisma.AnnoncesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnoncesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncesPayload>
          }
          findMany: {
            args: Prisma.AnnoncesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncesPayload>[]
          }
          create: {
            args: Prisma.AnnoncesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncesPayload>
          }
          createMany: {
            args: Prisma.AnnoncesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnoncesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncesPayload>[]
          }
          delete: {
            args: Prisma.AnnoncesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncesPayload>
          }
          update: {
            args: Prisma.AnnoncesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncesPayload>
          }
          deleteMany: {
            args: Prisma.AnnoncesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnoncesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnnoncesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncesPayload>[]
          }
          upsert: {
            args: Prisma.AnnoncesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnoncesPayload>
          }
          aggregate: {
            args: Prisma.AnnoncesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnonces>
          }
          groupBy: {
            args: Prisma.AnnoncesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnoncesGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnoncesCountArgs<ExtArgs>
            result: $Utils.Optional<AnnoncesCountAggregateOutputType> | number
          }
        }
      }
      Galerie: {
        payload: Prisma.$GaleriePayload<ExtArgs>
        fields: Prisma.GalerieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GalerieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GalerieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>
          }
          findFirst: {
            args: Prisma.GalerieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GalerieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>
          }
          findMany: {
            args: Prisma.GalerieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>[]
          }
          create: {
            args: Prisma.GalerieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>
          }
          createMany: {
            args: Prisma.GalerieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GalerieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>[]
          }
          delete: {
            args: Prisma.GalerieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>
          }
          update: {
            args: Prisma.GalerieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>
          }
          deleteMany: {
            args: Prisma.GalerieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GalerieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GalerieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>[]
          }
          upsert: {
            args: Prisma.GalerieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GaleriePayload>
          }
          aggregate: {
            args: Prisma.GalerieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGalerie>
          }
          groupBy: {
            args: Prisma.GalerieGroupByArgs<ExtArgs>
            result: $Utils.Optional<GalerieGroupByOutputType>[]
          }
          count: {
            args: Prisma.GalerieCountArgs<ExtArgs>
            result: $Utils.Optional<GalerieCountAggregateOutputType> | number
          }
        }
      }
      AnnonceSection: {
        payload: Prisma.$AnnonceSectionPayload<ExtArgs>
        fields: Prisma.AnnonceSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnonceSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnonceSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnonceSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnonceSectionPayload>
          }
          findFirst: {
            args: Prisma.AnnonceSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnonceSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnonceSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnonceSectionPayload>
          }
          findMany: {
            args: Prisma.AnnonceSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnonceSectionPayload>[]
          }
          create: {
            args: Prisma.AnnonceSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnonceSectionPayload>
          }
          createMany: {
            args: Prisma.AnnonceSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnonceSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnonceSectionPayload>[]
          }
          delete: {
            args: Prisma.AnnonceSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnonceSectionPayload>
          }
          update: {
            args: Prisma.AnnonceSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnonceSectionPayload>
          }
          deleteMany: {
            args: Prisma.AnnonceSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnonceSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnnonceSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnonceSectionPayload>[]
          }
          upsert: {
            args: Prisma.AnnonceSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnonceSectionPayload>
          }
          aggregate: {
            args: Prisma.AnnonceSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnonceSection>
          }
          groupBy: {
            args: Prisma.AnnonceSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnonceSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnonceSectionCountArgs<ExtArgs>
            result: $Utils.Optional<AnnonceSectionCountAggregateOutputType> | number
          }
        }
      }
      Horaire: {
        payload: Prisma.$HorairePayload<ExtArgs>
        fields: Prisma.HoraireFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HoraireFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorairePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HoraireFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorairePayload>
          }
          findFirst: {
            args: Prisma.HoraireFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorairePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HoraireFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorairePayload>
          }
          findMany: {
            args: Prisma.HoraireFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorairePayload>[]
          }
          create: {
            args: Prisma.HoraireCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorairePayload>
          }
          createMany: {
            args: Prisma.HoraireCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HoraireCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorairePayload>[]
          }
          delete: {
            args: Prisma.HoraireDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorairePayload>
          }
          update: {
            args: Prisma.HoraireUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorairePayload>
          }
          deleteMany: {
            args: Prisma.HoraireDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HoraireUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HoraireUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorairePayload>[]
          }
          upsert: {
            args: Prisma.HoraireUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HorairePayload>
          }
          aggregate: {
            args: Prisma.HoraireAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHoraire>
          }
          groupBy: {
            args: Prisma.HoraireGroupByArgs<ExtArgs>
            result: $Utils.Optional<HoraireGroupByOutputType>[]
          }
          count: {
            args: Prisma.HoraireCountArgs<ExtArgs>
            result: $Utils.Optional<HoraireCountAggregateOutputType> | number
          }
        }
      }
      Histoire: {
        payload: Prisma.$HistoirePayload<ExtArgs>
        fields: Prisma.HistoireFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoireFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoirePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoireFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoirePayload>
          }
          findFirst: {
            args: Prisma.HistoireFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoirePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoireFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoirePayload>
          }
          findMany: {
            args: Prisma.HistoireFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoirePayload>[]
          }
          create: {
            args: Prisma.HistoireCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoirePayload>
          }
          createMany: {
            args: Prisma.HistoireCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoireCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoirePayload>[]
          }
          delete: {
            args: Prisma.HistoireDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoirePayload>
          }
          update: {
            args: Prisma.HistoireUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoirePayload>
          }
          deleteMany: {
            args: Prisma.HistoireDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoireUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistoireUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoirePayload>[]
          }
          upsert: {
            args: Prisma.HistoireUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoirePayload>
          }
          aggregate: {
            args: Prisma.HistoireAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistoire>
          }
          groupBy: {
            args: Prisma.HistoireGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoireGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoireCountArgs<ExtArgs>
            result: $Utils.Optional<HistoireCountAggregateOutputType> | number
          }
        }
      }
      Commerce: {
        payload: Prisma.$CommercePayload<ExtArgs>
        fields: Prisma.CommerceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommerceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommercePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommerceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommercePayload>
          }
          findFirst: {
            args: Prisma.CommerceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommercePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommerceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommercePayload>
          }
          findMany: {
            args: Prisma.CommerceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommercePayload>[]
          }
          create: {
            args: Prisma.CommerceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommercePayload>
          }
          createMany: {
            args: Prisma.CommerceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommerceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommercePayload>[]
          }
          delete: {
            args: Prisma.CommerceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommercePayload>
          }
          update: {
            args: Prisma.CommerceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommercePayload>
          }
          deleteMany: {
            args: Prisma.CommerceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommerceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommerceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommercePayload>[]
          }
          upsert: {
            args: Prisma.CommerceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommercePayload>
          }
          aggregate: {
            args: Prisma.CommerceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommerce>
          }
          groupBy: {
            args: Prisma.CommerceGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommerceGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommerceCountArgs<ExtArgs>
            result: $Utils.Optional<CommerceCountAggregateOutputType> | number
          }
        }
      }
      CommerceSection: {
        payload: Prisma.$CommerceSectionPayload<ExtArgs>
        fields: Prisma.CommerceSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommerceSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommerceSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommerceSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommerceSectionPayload>
          }
          findFirst: {
            args: Prisma.CommerceSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommerceSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommerceSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommerceSectionPayload>
          }
          findMany: {
            args: Prisma.CommerceSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommerceSectionPayload>[]
          }
          create: {
            args: Prisma.CommerceSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommerceSectionPayload>
          }
          createMany: {
            args: Prisma.CommerceSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommerceSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommerceSectionPayload>[]
          }
          delete: {
            args: Prisma.CommerceSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommerceSectionPayload>
          }
          update: {
            args: Prisma.CommerceSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommerceSectionPayload>
          }
          deleteMany: {
            args: Prisma.CommerceSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommerceSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommerceSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommerceSectionPayload>[]
          }
          upsert: {
            args: Prisma.CommerceSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommerceSectionPayload>
          }
          aggregate: {
            args: Prisma.CommerceSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommerceSection>
          }
          groupBy: {
            args: Prisma.CommerceSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommerceSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommerceSectionCountArgs<ExtArgs>
            result: $Utils.Optional<CommerceSectionCountAggregateOutputType> | number
          }
        }
      }
      CommerceGalerie: {
        payload: Prisma.$CommerceGaleriePayload<ExtArgs>
        fields: Prisma.CommerceGalerieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommerceGalerieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommerceGaleriePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommerceGalerieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommerceGaleriePayload>
          }
          findFirst: {
            args: Prisma.CommerceGalerieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommerceGaleriePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommerceGalerieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommerceGaleriePayload>
          }
          findMany: {
            args: Prisma.CommerceGalerieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommerceGaleriePayload>[]
          }
          create: {
            args: Prisma.CommerceGalerieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommerceGaleriePayload>
          }
          createMany: {
            args: Prisma.CommerceGalerieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommerceGalerieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommerceGaleriePayload>[]
          }
          delete: {
            args: Prisma.CommerceGalerieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommerceGaleriePayload>
          }
          update: {
            args: Prisma.CommerceGalerieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommerceGaleriePayload>
          }
          deleteMany: {
            args: Prisma.CommerceGalerieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommerceGalerieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommerceGalerieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommerceGaleriePayload>[]
          }
          upsert: {
            args: Prisma.CommerceGalerieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommerceGaleriePayload>
          }
          aggregate: {
            args: Prisma.CommerceGalerieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommerceGalerie>
          }
          groupBy: {
            args: Prisma.CommerceGalerieGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommerceGalerieGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommerceGalerieCountArgs<ExtArgs>
            result: $Utils.Optional<CommerceGalerieCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    categorieAnnonce?: CategorieAnnonceOmit
    annonces?: AnnoncesOmit
    galerie?: GalerieOmit
    annonceSection?: AnnonceSectionOmit
    horaire?: HoraireOmit
    histoire?: HistoireOmit
    commerce?: CommerceOmit
    commerceSection?: CommerceSectionOmit
    commerceGalerie?: CommerceGalerieOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategorieAnnonceCountOutputType
   */

  export type CategorieAnnonceCountOutputType = {
    annonces: number
  }

  export type CategorieAnnonceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    annonces?: boolean | CategorieAnnonceCountOutputTypeCountAnnoncesArgs
  }

  // Custom InputTypes
  /**
   * CategorieAnnonceCountOutputType without action
   */
  export type CategorieAnnonceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieAnnonceCountOutputType
     */
    select?: CategorieAnnonceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategorieAnnonceCountOutputType without action
   */
  export type CategorieAnnonceCountOutputTypeCountAnnoncesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnoncesWhereInput
  }


  /**
   * Count Type AnnoncesCountOutputType
   */

  export type AnnoncesCountOutputType = {
    sections: number
    galerie: number
  }

  export type AnnoncesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | AnnoncesCountOutputTypeCountSectionsArgs
    galerie?: boolean | AnnoncesCountOutputTypeCountGalerieArgs
  }

  // Custom InputTypes
  /**
   * AnnoncesCountOutputType without action
   */
  export type AnnoncesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnoncesCountOutputType
     */
    select?: AnnoncesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnnoncesCountOutputType without action
   */
  export type AnnoncesCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnonceSectionWhereInput
  }

  /**
   * AnnoncesCountOutputType without action
   */
  export type AnnoncesCountOutputTypeCountGalerieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalerieWhereInput
  }


  /**
   * Count Type CommerceCountOutputType
   */

  export type CommerceCountOutputType = {
    galerie: number
    sections: number
  }

  export type CommerceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    galerie?: boolean | CommerceCountOutputTypeCountGalerieArgs
    sections?: boolean | CommerceCountOutputTypeCountSectionsArgs
  }

  // Custom InputTypes
  /**
   * CommerceCountOutputType without action
   */
  export type CommerceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommerceCountOutputType
     */
    select?: CommerceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommerceCountOutputType without action
   */
  export type CommerceCountOutputTypeCountGalerieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommerceGalerieWhereInput
  }

  /**
   * CommerceCountOutputType without action
   */
  export type CommerceCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommerceSectionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CategorieAnnonce
   */

  export type AggregateCategorieAnnonce = {
    _count: CategorieAnnonceCountAggregateOutputType | null
    _avg: CategorieAnnonceAvgAggregateOutputType | null
    _sum: CategorieAnnonceSumAggregateOutputType | null
    _min: CategorieAnnonceMinAggregateOutputType | null
    _max: CategorieAnnonceMaxAggregateOutputType | null
  }

  export type CategorieAnnonceAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorieAnnonceSumAggregateOutputType = {
    id: number | null
  }

  export type CategorieAnnonceMinAggregateOutputType = {
    id: number | null
    nom: string | null
    description: string | null
  }

  export type CategorieAnnonceMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    description: string | null
  }

  export type CategorieAnnonceCountAggregateOutputType = {
    id: number
    nom: number
    description: number
    _all: number
  }


  export type CategorieAnnonceAvgAggregateInputType = {
    id?: true
  }

  export type CategorieAnnonceSumAggregateInputType = {
    id?: true
  }

  export type CategorieAnnonceMinAggregateInputType = {
    id?: true
    nom?: true
    description?: true
  }

  export type CategorieAnnonceMaxAggregateInputType = {
    id?: true
    nom?: true
    description?: true
  }

  export type CategorieAnnonceCountAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    _all?: true
  }

  export type CategorieAnnonceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategorieAnnonce to aggregate.
     */
    where?: CategorieAnnonceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategorieAnnonces to fetch.
     */
    orderBy?: CategorieAnnonceOrderByWithRelationInput | CategorieAnnonceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategorieAnnonceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategorieAnnonces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategorieAnnonces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategorieAnnonces
    **/
    _count?: true | CategorieAnnonceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategorieAnnonceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorieAnnonceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategorieAnnonceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategorieAnnonceMaxAggregateInputType
  }

  export type GetCategorieAnnonceAggregateType<T extends CategorieAnnonceAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorieAnnonce]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorieAnnonce[P]>
      : GetScalarType<T[P], AggregateCategorieAnnonce[P]>
  }




  export type CategorieAnnonceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategorieAnnonceWhereInput
    orderBy?: CategorieAnnonceOrderByWithAggregationInput | CategorieAnnonceOrderByWithAggregationInput[]
    by: CategorieAnnonceScalarFieldEnum[] | CategorieAnnonceScalarFieldEnum
    having?: CategorieAnnonceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategorieAnnonceCountAggregateInputType | true
    _avg?: CategorieAnnonceAvgAggregateInputType
    _sum?: CategorieAnnonceSumAggregateInputType
    _min?: CategorieAnnonceMinAggregateInputType
    _max?: CategorieAnnonceMaxAggregateInputType
  }

  export type CategorieAnnonceGroupByOutputType = {
    id: number
    nom: string
    description: string | null
    _count: CategorieAnnonceCountAggregateOutputType | null
    _avg: CategorieAnnonceAvgAggregateOutputType | null
    _sum: CategorieAnnonceSumAggregateOutputType | null
    _min: CategorieAnnonceMinAggregateOutputType | null
    _max: CategorieAnnonceMaxAggregateOutputType | null
  }

  type GetCategorieAnnonceGroupByPayload<T extends CategorieAnnonceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategorieAnnonceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategorieAnnonceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategorieAnnonceGroupByOutputType[P]>
            : GetScalarType<T[P], CategorieAnnonceGroupByOutputType[P]>
        }
      >
    >


  export type CategorieAnnonceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    annonces?: boolean | CategorieAnnonce$annoncesArgs<ExtArgs>
    _count?: boolean | CategorieAnnonceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorieAnnonce"]>

  export type CategorieAnnonceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
  }, ExtArgs["result"]["categorieAnnonce"]>

  export type CategorieAnnonceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
  }, ExtArgs["result"]["categorieAnnonce"]>

  export type CategorieAnnonceSelectScalar = {
    id?: boolean
    nom?: boolean
    description?: boolean
  }

  export type CategorieAnnonceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "description", ExtArgs["result"]["categorieAnnonce"]>
  export type CategorieAnnonceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    annonces?: boolean | CategorieAnnonce$annoncesArgs<ExtArgs>
    _count?: boolean | CategorieAnnonceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategorieAnnonceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategorieAnnonceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategorieAnnoncePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategorieAnnonce"
    objects: {
      annonces: Prisma.$AnnoncesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      description: string | null
    }, ExtArgs["result"]["categorieAnnonce"]>
    composites: {}
  }

  type CategorieAnnonceGetPayload<S extends boolean | null | undefined | CategorieAnnonceDefaultArgs> = $Result.GetResult<Prisma.$CategorieAnnoncePayload, S>

  type CategorieAnnonceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategorieAnnonceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategorieAnnonceCountAggregateInputType | true
    }

  export interface CategorieAnnonceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategorieAnnonce'], meta: { name: 'CategorieAnnonce' } }
    /**
     * Find zero or one CategorieAnnonce that matches the filter.
     * @param {CategorieAnnonceFindUniqueArgs} args - Arguments to find a CategorieAnnonce
     * @example
     * // Get one CategorieAnnonce
     * const categorieAnnonce = await prisma.categorieAnnonce.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategorieAnnonceFindUniqueArgs>(args: SelectSubset<T, CategorieAnnonceFindUniqueArgs<ExtArgs>>): Prisma__CategorieAnnonceClient<$Result.GetResult<Prisma.$CategorieAnnoncePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CategorieAnnonce that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategorieAnnonceFindUniqueOrThrowArgs} args - Arguments to find a CategorieAnnonce
     * @example
     * // Get one CategorieAnnonce
     * const categorieAnnonce = await prisma.categorieAnnonce.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategorieAnnonceFindUniqueOrThrowArgs>(args: SelectSubset<T, CategorieAnnonceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategorieAnnonceClient<$Result.GetResult<Prisma.$CategorieAnnoncePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategorieAnnonce that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieAnnonceFindFirstArgs} args - Arguments to find a CategorieAnnonce
     * @example
     * // Get one CategorieAnnonce
     * const categorieAnnonce = await prisma.categorieAnnonce.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategorieAnnonceFindFirstArgs>(args?: SelectSubset<T, CategorieAnnonceFindFirstArgs<ExtArgs>>): Prisma__CategorieAnnonceClient<$Result.GetResult<Prisma.$CategorieAnnoncePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategorieAnnonce that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieAnnonceFindFirstOrThrowArgs} args - Arguments to find a CategorieAnnonce
     * @example
     * // Get one CategorieAnnonce
     * const categorieAnnonce = await prisma.categorieAnnonce.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategorieAnnonceFindFirstOrThrowArgs>(args?: SelectSubset<T, CategorieAnnonceFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategorieAnnonceClient<$Result.GetResult<Prisma.$CategorieAnnoncePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CategorieAnnonces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieAnnonceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategorieAnnonces
     * const categorieAnnonces = await prisma.categorieAnnonce.findMany()
     * 
     * // Get first 10 CategorieAnnonces
     * const categorieAnnonces = await prisma.categorieAnnonce.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categorieAnnonceWithIdOnly = await prisma.categorieAnnonce.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategorieAnnonceFindManyArgs>(args?: SelectSubset<T, CategorieAnnonceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategorieAnnoncePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CategorieAnnonce.
     * @param {CategorieAnnonceCreateArgs} args - Arguments to create a CategorieAnnonce.
     * @example
     * // Create one CategorieAnnonce
     * const CategorieAnnonce = await prisma.categorieAnnonce.create({
     *   data: {
     *     // ... data to create a CategorieAnnonce
     *   }
     * })
     * 
     */
    create<T extends CategorieAnnonceCreateArgs>(args: SelectSubset<T, CategorieAnnonceCreateArgs<ExtArgs>>): Prisma__CategorieAnnonceClient<$Result.GetResult<Prisma.$CategorieAnnoncePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CategorieAnnonces.
     * @param {CategorieAnnonceCreateManyArgs} args - Arguments to create many CategorieAnnonces.
     * @example
     * // Create many CategorieAnnonces
     * const categorieAnnonce = await prisma.categorieAnnonce.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategorieAnnonceCreateManyArgs>(args?: SelectSubset<T, CategorieAnnonceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CategorieAnnonces and returns the data saved in the database.
     * @param {CategorieAnnonceCreateManyAndReturnArgs} args - Arguments to create many CategorieAnnonces.
     * @example
     * // Create many CategorieAnnonces
     * const categorieAnnonce = await prisma.categorieAnnonce.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CategorieAnnonces and only return the `id`
     * const categorieAnnonceWithIdOnly = await prisma.categorieAnnonce.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategorieAnnonceCreateManyAndReturnArgs>(args?: SelectSubset<T, CategorieAnnonceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategorieAnnoncePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CategorieAnnonce.
     * @param {CategorieAnnonceDeleteArgs} args - Arguments to delete one CategorieAnnonce.
     * @example
     * // Delete one CategorieAnnonce
     * const CategorieAnnonce = await prisma.categorieAnnonce.delete({
     *   where: {
     *     // ... filter to delete one CategorieAnnonce
     *   }
     * })
     * 
     */
    delete<T extends CategorieAnnonceDeleteArgs>(args: SelectSubset<T, CategorieAnnonceDeleteArgs<ExtArgs>>): Prisma__CategorieAnnonceClient<$Result.GetResult<Prisma.$CategorieAnnoncePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CategorieAnnonce.
     * @param {CategorieAnnonceUpdateArgs} args - Arguments to update one CategorieAnnonce.
     * @example
     * // Update one CategorieAnnonce
     * const categorieAnnonce = await prisma.categorieAnnonce.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategorieAnnonceUpdateArgs>(args: SelectSubset<T, CategorieAnnonceUpdateArgs<ExtArgs>>): Prisma__CategorieAnnonceClient<$Result.GetResult<Prisma.$CategorieAnnoncePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CategorieAnnonces.
     * @param {CategorieAnnonceDeleteManyArgs} args - Arguments to filter CategorieAnnonces to delete.
     * @example
     * // Delete a few CategorieAnnonces
     * const { count } = await prisma.categorieAnnonce.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategorieAnnonceDeleteManyArgs>(args?: SelectSubset<T, CategorieAnnonceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategorieAnnonces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieAnnonceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategorieAnnonces
     * const categorieAnnonce = await prisma.categorieAnnonce.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategorieAnnonceUpdateManyArgs>(args: SelectSubset<T, CategorieAnnonceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategorieAnnonces and returns the data updated in the database.
     * @param {CategorieAnnonceUpdateManyAndReturnArgs} args - Arguments to update many CategorieAnnonces.
     * @example
     * // Update many CategorieAnnonces
     * const categorieAnnonce = await prisma.categorieAnnonce.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CategorieAnnonces and only return the `id`
     * const categorieAnnonceWithIdOnly = await prisma.categorieAnnonce.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategorieAnnonceUpdateManyAndReturnArgs>(args: SelectSubset<T, CategorieAnnonceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategorieAnnoncePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CategorieAnnonce.
     * @param {CategorieAnnonceUpsertArgs} args - Arguments to update or create a CategorieAnnonce.
     * @example
     * // Update or create a CategorieAnnonce
     * const categorieAnnonce = await prisma.categorieAnnonce.upsert({
     *   create: {
     *     // ... data to create a CategorieAnnonce
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategorieAnnonce we want to update
     *   }
     * })
     */
    upsert<T extends CategorieAnnonceUpsertArgs>(args: SelectSubset<T, CategorieAnnonceUpsertArgs<ExtArgs>>): Prisma__CategorieAnnonceClient<$Result.GetResult<Prisma.$CategorieAnnoncePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CategorieAnnonces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieAnnonceCountArgs} args - Arguments to filter CategorieAnnonces to count.
     * @example
     * // Count the number of CategorieAnnonces
     * const count = await prisma.categorieAnnonce.count({
     *   where: {
     *     // ... the filter for the CategorieAnnonces we want to count
     *   }
     * })
    **/
    count<T extends CategorieAnnonceCountArgs>(
      args?: Subset<T, CategorieAnnonceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategorieAnnonceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategorieAnnonce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieAnnonceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategorieAnnonceAggregateArgs>(args: Subset<T, CategorieAnnonceAggregateArgs>): Prisma.PrismaPromise<GetCategorieAnnonceAggregateType<T>>

    /**
     * Group by CategorieAnnonce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieAnnonceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategorieAnnonceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategorieAnnonceGroupByArgs['orderBy'] }
        : { orderBy?: CategorieAnnonceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategorieAnnonceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategorieAnnonceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategorieAnnonce model
   */
  readonly fields: CategorieAnnonceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategorieAnnonce.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategorieAnnonceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    annonces<T extends CategorieAnnonce$annoncesArgs<ExtArgs> = {}>(args?: Subset<T, CategorieAnnonce$annoncesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnoncesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CategorieAnnonce model
   */
  interface CategorieAnnonceFieldRefs {
    readonly id: FieldRef<"CategorieAnnonce", 'Int'>
    readonly nom: FieldRef<"CategorieAnnonce", 'String'>
    readonly description: FieldRef<"CategorieAnnonce", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CategorieAnnonce findUnique
   */
  export type CategorieAnnonceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieAnnonce
     */
    select?: CategorieAnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieAnnonce
     */
    omit?: CategorieAnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieAnnonceInclude<ExtArgs> | null
    /**
     * Filter, which CategorieAnnonce to fetch.
     */
    where: CategorieAnnonceWhereUniqueInput
  }

  /**
   * CategorieAnnonce findUniqueOrThrow
   */
  export type CategorieAnnonceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieAnnonce
     */
    select?: CategorieAnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieAnnonce
     */
    omit?: CategorieAnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieAnnonceInclude<ExtArgs> | null
    /**
     * Filter, which CategorieAnnonce to fetch.
     */
    where: CategorieAnnonceWhereUniqueInput
  }

  /**
   * CategorieAnnonce findFirst
   */
  export type CategorieAnnonceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieAnnonce
     */
    select?: CategorieAnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieAnnonce
     */
    omit?: CategorieAnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieAnnonceInclude<ExtArgs> | null
    /**
     * Filter, which CategorieAnnonce to fetch.
     */
    where?: CategorieAnnonceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategorieAnnonces to fetch.
     */
    orderBy?: CategorieAnnonceOrderByWithRelationInput | CategorieAnnonceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategorieAnnonces.
     */
    cursor?: CategorieAnnonceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategorieAnnonces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategorieAnnonces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategorieAnnonces.
     */
    distinct?: CategorieAnnonceScalarFieldEnum | CategorieAnnonceScalarFieldEnum[]
  }

  /**
   * CategorieAnnonce findFirstOrThrow
   */
  export type CategorieAnnonceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieAnnonce
     */
    select?: CategorieAnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieAnnonce
     */
    omit?: CategorieAnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieAnnonceInclude<ExtArgs> | null
    /**
     * Filter, which CategorieAnnonce to fetch.
     */
    where?: CategorieAnnonceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategorieAnnonces to fetch.
     */
    orderBy?: CategorieAnnonceOrderByWithRelationInput | CategorieAnnonceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategorieAnnonces.
     */
    cursor?: CategorieAnnonceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategorieAnnonces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategorieAnnonces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategorieAnnonces.
     */
    distinct?: CategorieAnnonceScalarFieldEnum | CategorieAnnonceScalarFieldEnum[]
  }

  /**
   * CategorieAnnonce findMany
   */
  export type CategorieAnnonceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieAnnonce
     */
    select?: CategorieAnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieAnnonce
     */
    omit?: CategorieAnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieAnnonceInclude<ExtArgs> | null
    /**
     * Filter, which CategorieAnnonces to fetch.
     */
    where?: CategorieAnnonceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategorieAnnonces to fetch.
     */
    orderBy?: CategorieAnnonceOrderByWithRelationInput | CategorieAnnonceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategorieAnnonces.
     */
    cursor?: CategorieAnnonceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategorieAnnonces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategorieAnnonces.
     */
    skip?: number
    distinct?: CategorieAnnonceScalarFieldEnum | CategorieAnnonceScalarFieldEnum[]
  }

  /**
   * CategorieAnnonce create
   */
  export type CategorieAnnonceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieAnnonce
     */
    select?: CategorieAnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieAnnonce
     */
    omit?: CategorieAnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieAnnonceInclude<ExtArgs> | null
    /**
     * The data needed to create a CategorieAnnonce.
     */
    data: XOR<CategorieAnnonceCreateInput, CategorieAnnonceUncheckedCreateInput>
  }

  /**
   * CategorieAnnonce createMany
   */
  export type CategorieAnnonceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategorieAnnonces.
     */
    data: CategorieAnnonceCreateManyInput | CategorieAnnonceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategorieAnnonce createManyAndReturn
   */
  export type CategorieAnnonceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieAnnonce
     */
    select?: CategorieAnnonceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieAnnonce
     */
    omit?: CategorieAnnonceOmit<ExtArgs> | null
    /**
     * The data used to create many CategorieAnnonces.
     */
    data: CategorieAnnonceCreateManyInput | CategorieAnnonceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategorieAnnonce update
   */
  export type CategorieAnnonceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieAnnonce
     */
    select?: CategorieAnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieAnnonce
     */
    omit?: CategorieAnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieAnnonceInclude<ExtArgs> | null
    /**
     * The data needed to update a CategorieAnnonce.
     */
    data: XOR<CategorieAnnonceUpdateInput, CategorieAnnonceUncheckedUpdateInput>
    /**
     * Choose, which CategorieAnnonce to update.
     */
    where: CategorieAnnonceWhereUniqueInput
  }

  /**
   * CategorieAnnonce updateMany
   */
  export type CategorieAnnonceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategorieAnnonces.
     */
    data: XOR<CategorieAnnonceUpdateManyMutationInput, CategorieAnnonceUncheckedUpdateManyInput>
    /**
     * Filter which CategorieAnnonces to update
     */
    where?: CategorieAnnonceWhereInput
    /**
     * Limit how many CategorieAnnonces to update.
     */
    limit?: number
  }

  /**
   * CategorieAnnonce updateManyAndReturn
   */
  export type CategorieAnnonceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieAnnonce
     */
    select?: CategorieAnnonceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieAnnonce
     */
    omit?: CategorieAnnonceOmit<ExtArgs> | null
    /**
     * The data used to update CategorieAnnonces.
     */
    data: XOR<CategorieAnnonceUpdateManyMutationInput, CategorieAnnonceUncheckedUpdateManyInput>
    /**
     * Filter which CategorieAnnonces to update
     */
    where?: CategorieAnnonceWhereInput
    /**
     * Limit how many CategorieAnnonces to update.
     */
    limit?: number
  }

  /**
   * CategorieAnnonce upsert
   */
  export type CategorieAnnonceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieAnnonce
     */
    select?: CategorieAnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieAnnonce
     */
    omit?: CategorieAnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieAnnonceInclude<ExtArgs> | null
    /**
     * The filter to search for the CategorieAnnonce to update in case it exists.
     */
    where: CategorieAnnonceWhereUniqueInput
    /**
     * In case the CategorieAnnonce found by the `where` argument doesn't exist, create a new CategorieAnnonce with this data.
     */
    create: XOR<CategorieAnnonceCreateInput, CategorieAnnonceUncheckedCreateInput>
    /**
     * In case the CategorieAnnonce was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategorieAnnonceUpdateInput, CategorieAnnonceUncheckedUpdateInput>
  }

  /**
   * CategorieAnnonce delete
   */
  export type CategorieAnnonceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieAnnonce
     */
    select?: CategorieAnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieAnnonce
     */
    omit?: CategorieAnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieAnnonceInclude<ExtArgs> | null
    /**
     * Filter which CategorieAnnonce to delete.
     */
    where: CategorieAnnonceWhereUniqueInput
  }

  /**
   * CategorieAnnonce deleteMany
   */
  export type CategorieAnnonceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategorieAnnonces to delete
     */
    where?: CategorieAnnonceWhereInput
    /**
     * Limit how many CategorieAnnonces to delete.
     */
    limit?: number
  }

  /**
   * CategorieAnnonce.annonces
   */
  export type CategorieAnnonce$annoncesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonces
     */
    select?: AnnoncesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonces
     */
    omit?: AnnoncesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnoncesInclude<ExtArgs> | null
    where?: AnnoncesWhereInput
    orderBy?: AnnoncesOrderByWithRelationInput | AnnoncesOrderByWithRelationInput[]
    cursor?: AnnoncesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnoncesScalarFieldEnum | AnnoncesScalarFieldEnum[]
  }

  /**
   * CategorieAnnonce without action
   */
  export type CategorieAnnonceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieAnnonce
     */
    select?: CategorieAnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieAnnonce
     */
    omit?: CategorieAnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieAnnonceInclude<ExtArgs> | null
  }


  /**
   * Model Annonces
   */

  export type AggregateAnnonces = {
    _count: AnnoncesCountAggregateOutputType | null
    _avg: AnnoncesAvgAggregateOutputType | null
    _sum: AnnoncesSumAggregateOutputType | null
    _min: AnnoncesMinAggregateOutputType | null
    _max: AnnoncesMaxAggregateOutputType | null
  }

  export type AnnoncesAvgAggregateOutputType = {
    id: number | null
    categorieId: number | null
  }

  export type AnnoncesSumAggregateOutputType = {
    id: number | null
    categorieId: number | null
  }

  export type AnnoncesMinAggregateOutputType = {
    id: number | null
    titre: string | null
    description: string | null
    imageUrl: string | null
    new: boolean | null
    datecreation: Date | null
    categorieId: number | null
  }

  export type AnnoncesMaxAggregateOutputType = {
    id: number | null
    titre: string | null
    description: string | null
    imageUrl: string | null
    new: boolean | null
    datecreation: Date | null
    categorieId: number | null
  }

  export type AnnoncesCountAggregateOutputType = {
    id: number
    titre: number
    description: number
    imageUrl: number
    new: number
    datecreation: number
    categorieId: number
    _all: number
  }


  export type AnnoncesAvgAggregateInputType = {
    id?: true
    categorieId?: true
  }

  export type AnnoncesSumAggregateInputType = {
    id?: true
    categorieId?: true
  }

  export type AnnoncesMinAggregateInputType = {
    id?: true
    titre?: true
    description?: true
    imageUrl?: true
    new?: true
    datecreation?: true
    categorieId?: true
  }

  export type AnnoncesMaxAggregateInputType = {
    id?: true
    titre?: true
    description?: true
    imageUrl?: true
    new?: true
    datecreation?: true
    categorieId?: true
  }

  export type AnnoncesCountAggregateInputType = {
    id?: true
    titre?: true
    description?: true
    imageUrl?: true
    new?: true
    datecreation?: true
    categorieId?: true
    _all?: true
  }

  export type AnnoncesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Annonces to aggregate.
     */
    where?: AnnoncesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annonces to fetch.
     */
    orderBy?: AnnoncesOrderByWithRelationInput | AnnoncesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnoncesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annonces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annonces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Annonces
    **/
    _count?: true | AnnoncesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnnoncesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnnoncesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnoncesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnoncesMaxAggregateInputType
  }

  export type GetAnnoncesAggregateType<T extends AnnoncesAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnonces]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnonces[P]>
      : GetScalarType<T[P], AggregateAnnonces[P]>
  }




  export type AnnoncesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnoncesWhereInput
    orderBy?: AnnoncesOrderByWithAggregationInput | AnnoncesOrderByWithAggregationInput[]
    by: AnnoncesScalarFieldEnum[] | AnnoncesScalarFieldEnum
    having?: AnnoncesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnoncesCountAggregateInputType | true
    _avg?: AnnoncesAvgAggregateInputType
    _sum?: AnnoncesSumAggregateInputType
    _min?: AnnoncesMinAggregateInputType
    _max?: AnnoncesMaxAggregateInputType
  }

  export type AnnoncesGroupByOutputType = {
    id: number
    titre: string
    description: string
    imageUrl: string
    new: boolean
    datecreation: Date
    categorieId: number | null
    _count: AnnoncesCountAggregateOutputType | null
    _avg: AnnoncesAvgAggregateOutputType | null
    _sum: AnnoncesSumAggregateOutputType | null
    _min: AnnoncesMinAggregateOutputType | null
    _max: AnnoncesMaxAggregateOutputType | null
  }

  type GetAnnoncesGroupByPayload<T extends AnnoncesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnoncesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnoncesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnoncesGroupByOutputType[P]>
            : GetScalarType<T[P], AnnoncesGroupByOutputType[P]>
        }
      >
    >


  export type AnnoncesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    description?: boolean
    imageUrl?: boolean
    new?: boolean
    datecreation?: boolean
    categorieId?: boolean
    sections?: boolean | Annonces$sectionsArgs<ExtArgs>
    categorie?: boolean | Annonces$categorieArgs<ExtArgs>
    galerie?: boolean | Annonces$galerieArgs<ExtArgs>
    _count?: boolean | AnnoncesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["annonces"]>

  export type AnnoncesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    description?: boolean
    imageUrl?: boolean
    new?: boolean
    datecreation?: boolean
    categorieId?: boolean
    categorie?: boolean | Annonces$categorieArgs<ExtArgs>
  }, ExtArgs["result"]["annonces"]>

  export type AnnoncesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    description?: boolean
    imageUrl?: boolean
    new?: boolean
    datecreation?: boolean
    categorieId?: boolean
    categorie?: boolean | Annonces$categorieArgs<ExtArgs>
  }, ExtArgs["result"]["annonces"]>

  export type AnnoncesSelectScalar = {
    id?: boolean
    titre?: boolean
    description?: boolean
    imageUrl?: boolean
    new?: boolean
    datecreation?: boolean
    categorieId?: boolean
  }

  export type AnnoncesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titre" | "description" | "imageUrl" | "new" | "datecreation" | "categorieId", ExtArgs["result"]["annonces"]>
  export type AnnoncesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | Annonces$sectionsArgs<ExtArgs>
    categorie?: boolean | Annonces$categorieArgs<ExtArgs>
    galerie?: boolean | Annonces$galerieArgs<ExtArgs>
    _count?: boolean | AnnoncesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnnoncesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorie?: boolean | Annonces$categorieArgs<ExtArgs>
  }
  export type AnnoncesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorie?: boolean | Annonces$categorieArgs<ExtArgs>
  }

  export type $AnnoncesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Annonces"
    objects: {
      sections: Prisma.$AnnonceSectionPayload<ExtArgs>[]
      categorie: Prisma.$CategorieAnnoncePayload<ExtArgs> | null
      galerie: Prisma.$GaleriePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titre: string
      description: string
      imageUrl: string
      new: boolean
      datecreation: Date
      categorieId: number | null
    }, ExtArgs["result"]["annonces"]>
    composites: {}
  }

  type AnnoncesGetPayload<S extends boolean | null | undefined | AnnoncesDefaultArgs> = $Result.GetResult<Prisma.$AnnoncesPayload, S>

  type AnnoncesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnoncesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnoncesCountAggregateInputType | true
    }

  export interface AnnoncesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Annonces'], meta: { name: 'Annonces' } }
    /**
     * Find zero or one Annonces that matches the filter.
     * @param {AnnoncesFindUniqueArgs} args - Arguments to find a Annonces
     * @example
     * // Get one Annonces
     * const annonces = await prisma.annonces.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnoncesFindUniqueArgs>(args: SelectSubset<T, AnnoncesFindUniqueArgs<ExtArgs>>): Prisma__AnnoncesClient<$Result.GetResult<Prisma.$AnnoncesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Annonces that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnoncesFindUniqueOrThrowArgs} args - Arguments to find a Annonces
     * @example
     * // Get one Annonces
     * const annonces = await prisma.annonces.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnoncesFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnoncesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnoncesClient<$Result.GetResult<Prisma.$AnnoncesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Annonces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnoncesFindFirstArgs} args - Arguments to find a Annonces
     * @example
     * // Get one Annonces
     * const annonces = await prisma.annonces.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnoncesFindFirstArgs>(args?: SelectSubset<T, AnnoncesFindFirstArgs<ExtArgs>>): Prisma__AnnoncesClient<$Result.GetResult<Prisma.$AnnoncesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Annonces that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnoncesFindFirstOrThrowArgs} args - Arguments to find a Annonces
     * @example
     * // Get one Annonces
     * const annonces = await prisma.annonces.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnoncesFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnoncesFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnoncesClient<$Result.GetResult<Prisma.$AnnoncesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Annonces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnoncesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Annonces
     * const annonces = await prisma.annonces.findMany()
     * 
     * // Get first 10 Annonces
     * const annonces = await prisma.annonces.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const annoncesWithIdOnly = await prisma.annonces.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnoncesFindManyArgs>(args?: SelectSubset<T, AnnoncesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnoncesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Annonces.
     * @param {AnnoncesCreateArgs} args - Arguments to create a Annonces.
     * @example
     * // Create one Annonces
     * const Annonces = await prisma.annonces.create({
     *   data: {
     *     // ... data to create a Annonces
     *   }
     * })
     * 
     */
    create<T extends AnnoncesCreateArgs>(args: SelectSubset<T, AnnoncesCreateArgs<ExtArgs>>): Prisma__AnnoncesClient<$Result.GetResult<Prisma.$AnnoncesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Annonces.
     * @param {AnnoncesCreateManyArgs} args - Arguments to create many Annonces.
     * @example
     * // Create many Annonces
     * const annonces = await prisma.annonces.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnoncesCreateManyArgs>(args?: SelectSubset<T, AnnoncesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Annonces and returns the data saved in the database.
     * @param {AnnoncesCreateManyAndReturnArgs} args - Arguments to create many Annonces.
     * @example
     * // Create many Annonces
     * const annonces = await prisma.annonces.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Annonces and only return the `id`
     * const annoncesWithIdOnly = await prisma.annonces.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnoncesCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnoncesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnoncesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Annonces.
     * @param {AnnoncesDeleteArgs} args - Arguments to delete one Annonces.
     * @example
     * // Delete one Annonces
     * const Annonces = await prisma.annonces.delete({
     *   where: {
     *     // ... filter to delete one Annonces
     *   }
     * })
     * 
     */
    delete<T extends AnnoncesDeleteArgs>(args: SelectSubset<T, AnnoncesDeleteArgs<ExtArgs>>): Prisma__AnnoncesClient<$Result.GetResult<Prisma.$AnnoncesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Annonces.
     * @param {AnnoncesUpdateArgs} args - Arguments to update one Annonces.
     * @example
     * // Update one Annonces
     * const annonces = await prisma.annonces.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnoncesUpdateArgs>(args: SelectSubset<T, AnnoncesUpdateArgs<ExtArgs>>): Prisma__AnnoncesClient<$Result.GetResult<Prisma.$AnnoncesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Annonces.
     * @param {AnnoncesDeleteManyArgs} args - Arguments to filter Annonces to delete.
     * @example
     * // Delete a few Annonces
     * const { count } = await prisma.annonces.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnoncesDeleteManyArgs>(args?: SelectSubset<T, AnnoncesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Annonces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnoncesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Annonces
     * const annonces = await prisma.annonces.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnoncesUpdateManyArgs>(args: SelectSubset<T, AnnoncesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Annonces and returns the data updated in the database.
     * @param {AnnoncesUpdateManyAndReturnArgs} args - Arguments to update many Annonces.
     * @example
     * // Update many Annonces
     * const annonces = await prisma.annonces.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Annonces and only return the `id`
     * const annoncesWithIdOnly = await prisma.annonces.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnnoncesUpdateManyAndReturnArgs>(args: SelectSubset<T, AnnoncesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnoncesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Annonces.
     * @param {AnnoncesUpsertArgs} args - Arguments to update or create a Annonces.
     * @example
     * // Update or create a Annonces
     * const annonces = await prisma.annonces.upsert({
     *   create: {
     *     // ... data to create a Annonces
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Annonces we want to update
     *   }
     * })
     */
    upsert<T extends AnnoncesUpsertArgs>(args: SelectSubset<T, AnnoncesUpsertArgs<ExtArgs>>): Prisma__AnnoncesClient<$Result.GetResult<Prisma.$AnnoncesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Annonces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnoncesCountArgs} args - Arguments to filter Annonces to count.
     * @example
     * // Count the number of Annonces
     * const count = await prisma.annonces.count({
     *   where: {
     *     // ... the filter for the Annonces we want to count
     *   }
     * })
    **/
    count<T extends AnnoncesCountArgs>(
      args?: Subset<T, AnnoncesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnoncesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Annonces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnoncesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnnoncesAggregateArgs>(args: Subset<T, AnnoncesAggregateArgs>): Prisma.PrismaPromise<GetAnnoncesAggregateType<T>>

    /**
     * Group by Annonces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnoncesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnnoncesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnoncesGroupByArgs['orderBy'] }
        : { orderBy?: AnnoncesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnnoncesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnoncesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Annonces model
   */
  readonly fields: AnnoncesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Annonces.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnoncesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sections<T extends Annonces$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, Annonces$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnonceSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categorie<T extends Annonces$categorieArgs<ExtArgs> = {}>(args?: Subset<T, Annonces$categorieArgs<ExtArgs>>): Prisma__CategorieAnnonceClient<$Result.GetResult<Prisma.$CategorieAnnoncePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    galerie<T extends Annonces$galerieArgs<ExtArgs> = {}>(args?: Subset<T, Annonces$galerieArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Annonces model
   */
  interface AnnoncesFieldRefs {
    readonly id: FieldRef<"Annonces", 'Int'>
    readonly titre: FieldRef<"Annonces", 'String'>
    readonly description: FieldRef<"Annonces", 'String'>
    readonly imageUrl: FieldRef<"Annonces", 'String'>
    readonly new: FieldRef<"Annonces", 'Boolean'>
    readonly datecreation: FieldRef<"Annonces", 'DateTime'>
    readonly categorieId: FieldRef<"Annonces", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Annonces findUnique
   */
  export type AnnoncesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonces
     */
    select?: AnnoncesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonces
     */
    omit?: AnnoncesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnoncesInclude<ExtArgs> | null
    /**
     * Filter, which Annonces to fetch.
     */
    where: AnnoncesWhereUniqueInput
  }

  /**
   * Annonces findUniqueOrThrow
   */
  export type AnnoncesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonces
     */
    select?: AnnoncesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonces
     */
    omit?: AnnoncesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnoncesInclude<ExtArgs> | null
    /**
     * Filter, which Annonces to fetch.
     */
    where: AnnoncesWhereUniqueInput
  }

  /**
   * Annonces findFirst
   */
  export type AnnoncesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonces
     */
    select?: AnnoncesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonces
     */
    omit?: AnnoncesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnoncesInclude<ExtArgs> | null
    /**
     * Filter, which Annonces to fetch.
     */
    where?: AnnoncesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annonces to fetch.
     */
    orderBy?: AnnoncesOrderByWithRelationInput | AnnoncesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Annonces.
     */
    cursor?: AnnoncesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annonces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annonces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Annonces.
     */
    distinct?: AnnoncesScalarFieldEnum | AnnoncesScalarFieldEnum[]
  }

  /**
   * Annonces findFirstOrThrow
   */
  export type AnnoncesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonces
     */
    select?: AnnoncesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonces
     */
    omit?: AnnoncesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnoncesInclude<ExtArgs> | null
    /**
     * Filter, which Annonces to fetch.
     */
    where?: AnnoncesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annonces to fetch.
     */
    orderBy?: AnnoncesOrderByWithRelationInput | AnnoncesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Annonces.
     */
    cursor?: AnnoncesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annonces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annonces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Annonces.
     */
    distinct?: AnnoncesScalarFieldEnum | AnnoncesScalarFieldEnum[]
  }

  /**
   * Annonces findMany
   */
  export type AnnoncesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonces
     */
    select?: AnnoncesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonces
     */
    omit?: AnnoncesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnoncesInclude<ExtArgs> | null
    /**
     * Filter, which Annonces to fetch.
     */
    where?: AnnoncesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annonces to fetch.
     */
    orderBy?: AnnoncesOrderByWithRelationInput | AnnoncesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Annonces.
     */
    cursor?: AnnoncesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annonces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annonces.
     */
    skip?: number
    distinct?: AnnoncesScalarFieldEnum | AnnoncesScalarFieldEnum[]
  }

  /**
   * Annonces create
   */
  export type AnnoncesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonces
     */
    select?: AnnoncesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonces
     */
    omit?: AnnoncesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnoncesInclude<ExtArgs> | null
    /**
     * The data needed to create a Annonces.
     */
    data: XOR<AnnoncesCreateInput, AnnoncesUncheckedCreateInput>
  }

  /**
   * Annonces createMany
   */
  export type AnnoncesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Annonces.
     */
    data: AnnoncesCreateManyInput | AnnoncesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Annonces createManyAndReturn
   */
  export type AnnoncesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonces
     */
    select?: AnnoncesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Annonces
     */
    omit?: AnnoncesOmit<ExtArgs> | null
    /**
     * The data used to create many Annonces.
     */
    data: AnnoncesCreateManyInput | AnnoncesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnoncesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Annonces update
   */
  export type AnnoncesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonces
     */
    select?: AnnoncesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonces
     */
    omit?: AnnoncesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnoncesInclude<ExtArgs> | null
    /**
     * The data needed to update a Annonces.
     */
    data: XOR<AnnoncesUpdateInput, AnnoncesUncheckedUpdateInput>
    /**
     * Choose, which Annonces to update.
     */
    where: AnnoncesWhereUniqueInput
  }

  /**
   * Annonces updateMany
   */
  export type AnnoncesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Annonces.
     */
    data: XOR<AnnoncesUpdateManyMutationInput, AnnoncesUncheckedUpdateManyInput>
    /**
     * Filter which Annonces to update
     */
    where?: AnnoncesWhereInput
    /**
     * Limit how many Annonces to update.
     */
    limit?: number
  }

  /**
   * Annonces updateManyAndReturn
   */
  export type AnnoncesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonces
     */
    select?: AnnoncesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Annonces
     */
    omit?: AnnoncesOmit<ExtArgs> | null
    /**
     * The data used to update Annonces.
     */
    data: XOR<AnnoncesUpdateManyMutationInput, AnnoncesUncheckedUpdateManyInput>
    /**
     * Filter which Annonces to update
     */
    where?: AnnoncesWhereInput
    /**
     * Limit how many Annonces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnoncesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Annonces upsert
   */
  export type AnnoncesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonces
     */
    select?: AnnoncesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonces
     */
    omit?: AnnoncesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnoncesInclude<ExtArgs> | null
    /**
     * The filter to search for the Annonces to update in case it exists.
     */
    where: AnnoncesWhereUniqueInput
    /**
     * In case the Annonces found by the `where` argument doesn't exist, create a new Annonces with this data.
     */
    create: XOR<AnnoncesCreateInput, AnnoncesUncheckedCreateInput>
    /**
     * In case the Annonces was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnoncesUpdateInput, AnnoncesUncheckedUpdateInput>
  }

  /**
   * Annonces delete
   */
  export type AnnoncesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonces
     */
    select?: AnnoncesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonces
     */
    omit?: AnnoncesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnoncesInclude<ExtArgs> | null
    /**
     * Filter which Annonces to delete.
     */
    where: AnnoncesWhereUniqueInput
  }

  /**
   * Annonces deleteMany
   */
  export type AnnoncesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Annonces to delete
     */
    where?: AnnoncesWhereInput
    /**
     * Limit how many Annonces to delete.
     */
    limit?: number
  }

  /**
   * Annonces.sections
   */
  export type Annonces$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnonceSection
     */
    select?: AnnonceSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnonceSection
     */
    omit?: AnnonceSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceSectionInclude<ExtArgs> | null
    where?: AnnonceSectionWhereInput
    orderBy?: AnnonceSectionOrderByWithRelationInput | AnnonceSectionOrderByWithRelationInput[]
    cursor?: AnnonceSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnonceSectionScalarFieldEnum | AnnonceSectionScalarFieldEnum[]
  }

  /**
   * Annonces.categorie
   */
  export type Annonces$categorieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieAnnonce
     */
    select?: CategorieAnnonceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategorieAnnonce
     */
    omit?: CategorieAnnonceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieAnnonceInclude<ExtArgs> | null
    where?: CategorieAnnonceWhereInput
  }

  /**
   * Annonces.galerie
   */
  export type Annonces$galerieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    where?: GalerieWhereInput
    orderBy?: GalerieOrderByWithRelationInput | GalerieOrderByWithRelationInput[]
    cursor?: GalerieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GalerieScalarFieldEnum | GalerieScalarFieldEnum[]
  }

  /**
   * Annonces without action
   */
  export type AnnoncesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonces
     */
    select?: AnnoncesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Annonces
     */
    omit?: AnnoncesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnoncesInclude<ExtArgs> | null
  }


  /**
   * Model Galerie
   */

  export type AggregateGalerie = {
    _count: GalerieCountAggregateOutputType | null
    _avg: GalerieAvgAggregateOutputType | null
    _sum: GalerieSumAggregateOutputType | null
    _min: GalerieMinAggregateOutputType | null
    _max: GalerieMaxAggregateOutputType | null
  }

  export type GalerieAvgAggregateOutputType = {
    id: number | null
    annonceId: number | null
  }

  export type GalerieSumAggregateOutputType = {
    id: number | null
    annonceId: number | null
  }

  export type GalerieMinAggregateOutputType = {
    id: number | null
    imageUrl: string | null
    description: string | null
    annonceId: number | null
    createdAt: Date | null
  }

  export type GalerieMaxAggregateOutputType = {
    id: number | null
    imageUrl: string | null
    description: string | null
    annonceId: number | null
    createdAt: Date | null
  }

  export type GalerieCountAggregateOutputType = {
    id: number
    imageUrl: number
    description: number
    annonceId: number
    createdAt: number
    _all: number
  }


  export type GalerieAvgAggregateInputType = {
    id?: true
    annonceId?: true
  }

  export type GalerieSumAggregateInputType = {
    id?: true
    annonceId?: true
  }

  export type GalerieMinAggregateInputType = {
    id?: true
    imageUrl?: true
    description?: true
    annonceId?: true
    createdAt?: true
  }

  export type GalerieMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    description?: true
    annonceId?: true
    createdAt?: true
  }

  export type GalerieCountAggregateInputType = {
    id?: true
    imageUrl?: true
    description?: true
    annonceId?: true
    createdAt?: true
    _all?: true
  }

  export type GalerieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Galerie to aggregate.
     */
    where?: GalerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galeries to fetch.
     */
    orderBy?: GalerieOrderByWithRelationInput | GalerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GalerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Galeries
    **/
    _count?: true | GalerieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GalerieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GalerieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalerieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalerieMaxAggregateInputType
  }

  export type GetGalerieAggregateType<T extends GalerieAggregateArgs> = {
        [P in keyof T & keyof AggregateGalerie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGalerie[P]>
      : GetScalarType<T[P], AggregateGalerie[P]>
  }




  export type GalerieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalerieWhereInput
    orderBy?: GalerieOrderByWithAggregationInput | GalerieOrderByWithAggregationInput[]
    by: GalerieScalarFieldEnum[] | GalerieScalarFieldEnum
    having?: GalerieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalerieCountAggregateInputType | true
    _avg?: GalerieAvgAggregateInputType
    _sum?: GalerieSumAggregateInputType
    _min?: GalerieMinAggregateInputType
    _max?: GalerieMaxAggregateInputType
  }

  export type GalerieGroupByOutputType = {
    id: number
    imageUrl: string
    description: string | null
    annonceId: number
    createdAt: Date
    _count: GalerieCountAggregateOutputType | null
    _avg: GalerieAvgAggregateOutputType | null
    _sum: GalerieSumAggregateOutputType | null
    _min: GalerieMinAggregateOutputType | null
    _max: GalerieMaxAggregateOutputType | null
  }

  type GetGalerieGroupByPayload<T extends GalerieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalerieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalerieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalerieGroupByOutputType[P]>
            : GetScalarType<T[P], GalerieGroupByOutputType[P]>
        }
      >
    >


  export type GalerieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    description?: boolean
    annonceId?: boolean
    createdAt?: boolean
    annonce?: boolean | AnnoncesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galerie"]>

  export type GalerieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    description?: boolean
    annonceId?: boolean
    createdAt?: boolean
    annonce?: boolean | AnnoncesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galerie"]>

  export type GalerieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    description?: boolean
    annonceId?: boolean
    createdAt?: boolean
    annonce?: boolean | AnnoncesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galerie"]>

  export type GalerieSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    description?: boolean
    annonceId?: boolean
    createdAt?: boolean
  }

  export type GalerieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "description" | "annonceId" | "createdAt", ExtArgs["result"]["galerie"]>
  export type GalerieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    annonce?: boolean | AnnoncesDefaultArgs<ExtArgs>
  }
  export type GalerieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    annonce?: boolean | AnnoncesDefaultArgs<ExtArgs>
  }
  export type GalerieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    annonce?: boolean | AnnoncesDefaultArgs<ExtArgs>
  }

  export type $GaleriePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Galerie"
    objects: {
      annonce: Prisma.$AnnoncesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      imageUrl: string
      description: string | null
      annonceId: number
      createdAt: Date
    }, ExtArgs["result"]["galerie"]>
    composites: {}
  }

  type GalerieGetPayload<S extends boolean | null | undefined | GalerieDefaultArgs> = $Result.GetResult<Prisma.$GaleriePayload, S>

  type GalerieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GalerieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GalerieCountAggregateInputType | true
    }

  export interface GalerieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Galerie'], meta: { name: 'Galerie' } }
    /**
     * Find zero or one Galerie that matches the filter.
     * @param {GalerieFindUniqueArgs} args - Arguments to find a Galerie
     * @example
     * // Get one Galerie
     * const galerie = await prisma.galerie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GalerieFindUniqueArgs>(args: SelectSubset<T, GalerieFindUniqueArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Galerie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GalerieFindUniqueOrThrowArgs} args - Arguments to find a Galerie
     * @example
     * // Get one Galerie
     * const galerie = await prisma.galerie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GalerieFindUniqueOrThrowArgs>(args: SelectSubset<T, GalerieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Galerie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalerieFindFirstArgs} args - Arguments to find a Galerie
     * @example
     * // Get one Galerie
     * const galerie = await prisma.galerie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GalerieFindFirstArgs>(args?: SelectSubset<T, GalerieFindFirstArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Galerie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalerieFindFirstOrThrowArgs} args - Arguments to find a Galerie
     * @example
     * // Get one Galerie
     * const galerie = await prisma.galerie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GalerieFindFirstOrThrowArgs>(args?: SelectSubset<T, GalerieFindFirstOrThrowArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Galeries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalerieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Galeries
     * const galeries = await prisma.galerie.findMany()
     * 
     * // Get first 10 Galeries
     * const galeries = await prisma.galerie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const galerieWithIdOnly = await prisma.galerie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GalerieFindManyArgs>(args?: SelectSubset<T, GalerieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Galerie.
     * @param {GalerieCreateArgs} args - Arguments to create a Galerie.
     * @example
     * // Create one Galerie
     * const Galerie = await prisma.galerie.create({
     *   data: {
     *     // ... data to create a Galerie
     *   }
     * })
     * 
     */
    create<T extends GalerieCreateArgs>(args: SelectSubset<T, GalerieCreateArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Galeries.
     * @param {GalerieCreateManyArgs} args - Arguments to create many Galeries.
     * @example
     * // Create many Galeries
     * const galerie = await prisma.galerie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GalerieCreateManyArgs>(args?: SelectSubset<T, GalerieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Galeries and returns the data saved in the database.
     * @param {GalerieCreateManyAndReturnArgs} args - Arguments to create many Galeries.
     * @example
     * // Create many Galeries
     * const galerie = await prisma.galerie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Galeries and only return the `id`
     * const galerieWithIdOnly = await prisma.galerie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GalerieCreateManyAndReturnArgs>(args?: SelectSubset<T, GalerieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Galerie.
     * @param {GalerieDeleteArgs} args - Arguments to delete one Galerie.
     * @example
     * // Delete one Galerie
     * const Galerie = await prisma.galerie.delete({
     *   where: {
     *     // ... filter to delete one Galerie
     *   }
     * })
     * 
     */
    delete<T extends GalerieDeleteArgs>(args: SelectSubset<T, GalerieDeleteArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Galerie.
     * @param {GalerieUpdateArgs} args - Arguments to update one Galerie.
     * @example
     * // Update one Galerie
     * const galerie = await prisma.galerie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GalerieUpdateArgs>(args: SelectSubset<T, GalerieUpdateArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Galeries.
     * @param {GalerieDeleteManyArgs} args - Arguments to filter Galeries to delete.
     * @example
     * // Delete a few Galeries
     * const { count } = await prisma.galerie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GalerieDeleteManyArgs>(args?: SelectSubset<T, GalerieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Galeries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalerieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Galeries
     * const galerie = await prisma.galerie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GalerieUpdateManyArgs>(args: SelectSubset<T, GalerieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Galeries and returns the data updated in the database.
     * @param {GalerieUpdateManyAndReturnArgs} args - Arguments to update many Galeries.
     * @example
     * // Update many Galeries
     * const galerie = await prisma.galerie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Galeries and only return the `id`
     * const galerieWithIdOnly = await prisma.galerie.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GalerieUpdateManyAndReturnArgs>(args: SelectSubset<T, GalerieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Galerie.
     * @param {GalerieUpsertArgs} args - Arguments to update or create a Galerie.
     * @example
     * // Update or create a Galerie
     * const galerie = await prisma.galerie.upsert({
     *   create: {
     *     // ... data to create a Galerie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Galerie we want to update
     *   }
     * })
     */
    upsert<T extends GalerieUpsertArgs>(args: SelectSubset<T, GalerieUpsertArgs<ExtArgs>>): Prisma__GalerieClient<$Result.GetResult<Prisma.$GaleriePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Galeries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalerieCountArgs} args - Arguments to filter Galeries to count.
     * @example
     * // Count the number of Galeries
     * const count = await prisma.galerie.count({
     *   where: {
     *     // ... the filter for the Galeries we want to count
     *   }
     * })
    **/
    count<T extends GalerieCountArgs>(
      args?: Subset<T, GalerieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalerieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Galerie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalerieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GalerieAggregateArgs>(args: Subset<T, GalerieAggregateArgs>): Prisma.PrismaPromise<GetGalerieAggregateType<T>>

    /**
     * Group by Galerie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalerieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GalerieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalerieGroupByArgs['orderBy'] }
        : { orderBy?: GalerieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GalerieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalerieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Galerie model
   */
  readonly fields: GalerieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Galerie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalerieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    annonce<T extends AnnoncesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnnoncesDefaultArgs<ExtArgs>>): Prisma__AnnoncesClient<$Result.GetResult<Prisma.$AnnoncesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Galerie model
   */
  interface GalerieFieldRefs {
    readonly id: FieldRef<"Galerie", 'Int'>
    readonly imageUrl: FieldRef<"Galerie", 'String'>
    readonly description: FieldRef<"Galerie", 'String'>
    readonly annonceId: FieldRef<"Galerie", 'Int'>
    readonly createdAt: FieldRef<"Galerie", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Galerie findUnique
   */
  export type GalerieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * Filter, which Galerie to fetch.
     */
    where: GalerieWhereUniqueInput
  }

  /**
   * Galerie findUniqueOrThrow
   */
  export type GalerieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * Filter, which Galerie to fetch.
     */
    where: GalerieWhereUniqueInput
  }

  /**
   * Galerie findFirst
   */
  export type GalerieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * Filter, which Galerie to fetch.
     */
    where?: GalerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galeries to fetch.
     */
    orderBy?: GalerieOrderByWithRelationInput | GalerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Galeries.
     */
    cursor?: GalerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galeries.
     */
    distinct?: GalerieScalarFieldEnum | GalerieScalarFieldEnum[]
  }

  /**
   * Galerie findFirstOrThrow
   */
  export type GalerieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * Filter, which Galerie to fetch.
     */
    where?: GalerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galeries to fetch.
     */
    orderBy?: GalerieOrderByWithRelationInput | GalerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Galeries.
     */
    cursor?: GalerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galeries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galeries.
     */
    distinct?: GalerieScalarFieldEnum | GalerieScalarFieldEnum[]
  }

  /**
   * Galerie findMany
   */
  export type GalerieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * Filter, which Galeries to fetch.
     */
    where?: GalerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galeries to fetch.
     */
    orderBy?: GalerieOrderByWithRelationInput | GalerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Galeries.
     */
    cursor?: GalerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galeries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galeries.
     */
    skip?: number
    distinct?: GalerieScalarFieldEnum | GalerieScalarFieldEnum[]
  }

  /**
   * Galerie create
   */
  export type GalerieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * The data needed to create a Galerie.
     */
    data: XOR<GalerieCreateInput, GalerieUncheckedCreateInput>
  }

  /**
   * Galerie createMany
   */
  export type GalerieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Galeries.
     */
    data: GalerieCreateManyInput | GalerieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Galerie createManyAndReturn
   */
  export type GalerieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * The data used to create many Galeries.
     */
    data: GalerieCreateManyInput | GalerieCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Galerie update
   */
  export type GalerieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * The data needed to update a Galerie.
     */
    data: XOR<GalerieUpdateInput, GalerieUncheckedUpdateInput>
    /**
     * Choose, which Galerie to update.
     */
    where: GalerieWhereUniqueInput
  }

  /**
   * Galerie updateMany
   */
  export type GalerieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Galeries.
     */
    data: XOR<GalerieUpdateManyMutationInput, GalerieUncheckedUpdateManyInput>
    /**
     * Filter which Galeries to update
     */
    where?: GalerieWhereInput
    /**
     * Limit how many Galeries to update.
     */
    limit?: number
  }

  /**
   * Galerie updateManyAndReturn
   */
  export type GalerieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * The data used to update Galeries.
     */
    data: XOR<GalerieUpdateManyMutationInput, GalerieUncheckedUpdateManyInput>
    /**
     * Filter which Galeries to update
     */
    where?: GalerieWhereInput
    /**
     * Limit how many Galeries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Galerie upsert
   */
  export type GalerieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * The filter to search for the Galerie to update in case it exists.
     */
    where: GalerieWhereUniqueInput
    /**
     * In case the Galerie found by the `where` argument doesn't exist, create a new Galerie with this data.
     */
    create: XOR<GalerieCreateInput, GalerieUncheckedCreateInput>
    /**
     * In case the Galerie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalerieUpdateInput, GalerieUncheckedUpdateInput>
  }

  /**
   * Galerie delete
   */
  export type GalerieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
    /**
     * Filter which Galerie to delete.
     */
    where: GalerieWhereUniqueInput
  }

  /**
   * Galerie deleteMany
   */
  export type GalerieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Galeries to delete
     */
    where?: GalerieWhereInput
    /**
     * Limit how many Galeries to delete.
     */
    limit?: number
  }

  /**
   * Galerie without action
   */
  export type GalerieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Galerie
     */
    select?: GalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Galerie
     */
    omit?: GalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalerieInclude<ExtArgs> | null
  }


  /**
   * Model AnnonceSection
   */

  export type AggregateAnnonceSection = {
    _count: AnnonceSectionCountAggregateOutputType | null
    _avg: AnnonceSectionAvgAggregateOutputType | null
    _sum: AnnonceSectionSumAggregateOutputType | null
    _min: AnnonceSectionMinAggregateOutputType | null
    _max: AnnonceSectionMaxAggregateOutputType | null
  }

  export type AnnonceSectionAvgAggregateOutputType = {
    id: number | null
    annonceId: number | null
    ordre: number | null
  }

  export type AnnonceSectionSumAggregateOutputType = {
    id: number | null
    annonceId: number | null
    ordre: number | null
  }

  export type AnnonceSectionMinAggregateOutputType = {
    id: number | null
    annonceId: number | null
    ordre: number | null
    type: $Enums.TypeSection | null
    contenu: string | null
    imageUrl: string | null
    videoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnnonceSectionMaxAggregateOutputType = {
    id: number | null
    annonceId: number | null
    ordre: number | null
    type: $Enums.TypeSection | null
    contenu: string | null
    imageUrl: string | null
    videoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnnonceSectionCountAggregateOutputType = {
    id: number
    annonceId: number
    ordre: number
    type: number
    contenu: number
    imageUrl: number
    videoUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnnonceSectionAvgAggregateInputType = {
    id?: true
    annonceId?: true
    ordre?: true
  }

  export type AnnonceSectionSumAggregateInputType = {
    id?: true
    annonceId?: true
    ordre?: true
  }

  export type AnnonceSectionMinAggregateInputType = {
    id?: true
    annonceId?: true
    ordre?: true
    type?: true
    contenu?: true
    imageUrl?: true
    videoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnnonceSectionMaxAggregateInputType = {
    id?: true
    annonceId?: true
    ordre?: true
    type?: true
    contenu?: true
    imageUrl?: true
    videoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnnonceSectionCountAggregateInputType = {
    id?: true
    annonceId?: true
    ordre?: true
    type?: true
    contenu?: true
    imageUrl?: true
    videoUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnnonceSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnnonceSection to aggregate.
     */
    where?: AnnonceSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnnonceSections to fetch.
     */
    orderBy?: AnnonceSectionOrderByWithRelationInput | AnnonceSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnonceSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnnonceSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnnonceSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnnonceSections
    **/
    _count?: true | AnnonceSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnnonceSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnnonceSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnonceSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnonceSectionMaxAggregateInputType
  }

  export type GetAnnonceSectionAggregateType<T extends AnnonceSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnonceSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnonceSection[P]>
      : GetScalarType<T[P], AggregateAnnonceSection[P]>
  }




  export type AnnonceSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnonceSectionWhereInput
    orderBy?: AnnonceSectionOrderByWithAggregationInput | AnnonceSectionOrderByWithAggregationInput[]
    by: AnnonceSectionScalarFieldEnum[] | AnnonceSectionScalarFieldEnum
    having?: AnnonceSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnonceSectionCountAggregateInputType | true
    _avg?: AnnonceSectionAvgAggregateInputType
    _sum?: AnnonceSectionSumAggregateInputType
    _min?: AnnonceSectionMinAggregateInputType
    _max?: AnnonceSectionMaxAggregateInputType
  }

  export type AnnonceSectionGroupByOutputType = {
    id: number
    annonceId: number
    ordre: number
    type: $Enums.TypeSection
    contenu: string
    imageUrl: string | null
    videoUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: AnnonceSectionCountAggregateOutputType | null
    _avg: AnnonceSectionAvgAggregateOutputType | null
    _sum: AnnonceSectionSumAggregateOutputType | null
    _min: AnnonceSectionMinAggregateOutputType | null
    _max: AnnonceSectionMaxAggregateOutputType | null
  }

  type GetAnnonceSectionGroupByPayload<T extends AnnonceSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnonceSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnonceSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnonceSectionGroupByOutputType[P]>
            : GetScalarType<T[P], AnnonceSectionGroupByOutputType[P]>
        }
      >
    >


  export type AnnonceSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    annonceId?: boolean
    ordre?: boolean
    type?: boolean
    contenu?: boolean
    imageUrl?: boolean
    videoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    annonce?: boolean | AnnoncesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["annonceSection"]>

  export type AnnonceSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    annonceId?: boolean
    ordre?: boolean
    type?: boolean
    contenu?: boolean
    imageUrl?: boolean
    videoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    annonce?: boolean | AnnoncesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["annonceSection"]>

  export type AnnonceSectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    annonceId?: boolean
    ordre?: boolean
    type?: boolean
    contenu?: boolean
    imageUrl?: boolean
    videoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    annonce?: boolean | AnnoncesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["annonceSection"]>

  export type AnnonceSectionSelectScalar = {
    id?: boolean
    annonceId?: boolean
    ordre?: boolean
    type?: boolean
    contenu?: boolean
    imageUrl?: boolean
    videoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnnonceSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "annonceId" | "ordre" | "type" | "contenu" | "imageUrl" | "videoUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["annonceSection"]>
  export type AnnonceSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    annonce?: boolean | AnnoncesDefaultArgs<ExtArgs>
  }
  export type AnnonceSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    annonce?: boolean | AnnoncesDefaultArgs<ExtArgs>
  }
  export type AnnonceSectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    annonce?: boolean | AnnoncesDefaultArgs<ExtArgs>
  }

  export type $AnnonceSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnnonceSection"
    objects: {
      annonce: Prisma.$AnnoncesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      annonceId: number
      ordre: number
      type: $Enums.TypeSection
      contenu: string
      imageUrl: string | null
      videoUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["annonceSection"]>
    composites: {}
  }

  type AnnonceSectionGetPayload<S extends boolean | null | undefined | AnnonceSectionDefaultArgs> = $Result.GetResult<Prisma.$AnnonceSectionPayload, S>

  type AnnonceSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnonceSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnonceSectionCountAggregateInputType | true
    }

  export interface AnnonceSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnnonceSection'], meta: { name: 'AnnonceSection' } }
    /**
     * Find zero or one AnnonceSection that matches the filter.
     * @param {AnnonceSectionFindUniqueArgs} args - Arguments to find a AnnonceSection
     * @example
     * // Get one AnnonceSection
     * const annonceSection = await prisma.annonceSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnonceSectionFindUniqueArgs>(args: SelectSubset<T, AnnonceSectionFindUniqueArgs<ExtArgs>>): Prisma__AnnonceSectionClient<$Result.GetResult<Prisma.$AnnonceSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnnonceSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnonceSectionFindUniqueOrThrowArgs} args - Arguments to find a AnnonceSection
     * @example
     * // Get one AnnonceSection
     * const annonceSection = await prisma.annonceSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnonceSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnonceSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnonceSectionClient<$Result.GetResult<Prisma.$AnnonceSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnnonceSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceSectionFindFirstArgs} args - Arguments to find a AnnonceSection
     * @example
     * // Get one AnnonceSection
     * const annonceSection = await prisma.annonceSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnonceSectionFindFirstArgs>(args?: SelectSubset<T, AnnonceSectionFindFirstArgs<ExtArgs>>): Prisma__AnnonceSectionClient<$Result.GetResult<Prisma.$AnnonceSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnnonceSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceSectionFindFirstOrThrowArgs} args - Arguments to find a AnnonceSection
     * @example
     * // Get one AnnonceSection
     * const annonceSection = await prisma.annonceSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnonceSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnonceSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnonceSectionClient<$Result.GetResult<Prisma.$AnnonceSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnnonceSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnnonceSections
     * const annonceSections = await prisma.annonceSection.findMany()
     * 
     * // Get first 10 AnnonceSections
     * const annonceSections = await prisma.annonceSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const annonceSectionWithIdOnly = await prisma.annonceSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnonceSectionFindManyArgs>(args?: SelectSubset<T, AnnonceSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnonceSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnnonceSection.
     * @param {AnnonceSectionCreateArgs} args - Arguments to create a AnnonceSection.
     * @example
     * // Create one AnnonceSection
     * const AnnonceSection = await prisma.annonceSection.create({
     *   data: {
     *     // ... data to create a AnnonceSection
     *   }
     * })
     * 
     */
    create<T extends AnnonceSectionCreateArgs>(args: SelectSubset<T, AnnonceSectionCreateArgs<ExtArgs>>): Prisma__AnnonceSectionClient<$Result.GetResult<Prisma.$AnnonceSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnnonceSections.
     * @param {AnnonceSectionCreateManyArgs} args - Arguments to create many AnnonceSections.
     * @example
     * // Create many AnnonceSections
     * const annonceSection = await prisma.annonceSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnonceSectionCreateManyArgs>(args?: SelectSubset<T, AnnonceSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnnonceSections and returns the data saved in the database.
     * @param {AnnonceSectionCreateManyAndReturnArgs} args - Arguments to create many AnnonceSections.
     * @example
     * // Create many AnnonceSections
     * const annonceSection = await prisma.annonceSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnnonceSections and only return the `id`
     * const annonceSectionWithIdOnly = await prisma.annonceSection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnonceSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnonceSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnonceSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnnonceSection.
     * @param {AnnonceSectionDeleteArgs} args - Arguments to delete one AnnonceSection.
     * @example
     * // Delete one AnnonceSection
     * const AnnonceSection = await prisma.annonceSection.delete({
     *   where: {
     *     // ... filter to delete one AnnonceSection
     *   }
     * })
     * 
     */
    delete<T extends AnnonceSectionDeleteArgs>(args: SelectSubset<T, AnnonceSectionDeleteArgs<ExtArgs>>): Prisma__AnnonceSectionClient<$Result.GetResult<Prisma.$AnnonceSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnnonceSection.
     * @param {AnnonceSectionUpdateArgs} args - Arguments to update one AnnonceSection.
     * @example
     * // Update one AnnonceSection
     * const annonceSection = await prisma.annonceSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnonceSectionUpdateArgs>(args: SelectSubset<T, AnnonceSectionUpdateArgs<ExtArgs>>): Prisma__AnnonceSectionClient<$Result.GetResult<Prisma.$AnnonceSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnnonceSections.
     * @param {AnnonceSectionDeleteManyArgs} args - Arguments to filter AnnonceSections to delete.
     * @example
     * // Delete a few AnnonceSections
     * const { count } = await prisma.annonceSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnonceSectionDeleteManyArgs>(args?: SelectSubset<T, AnnonceSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnnonceSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnnonceSections
     * const annonceSection = await prisma.annonceSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnonceSectionUpdateManyArgs>(args: SelectSubset<T, AnnonceSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnnonceSections and returns the data updated in the database.
     * @param {AnnonceSectionUpdateManyAndReturnArgs} args - Arguments to update many AnnonceSections.
     * @example
     * // Update many AnnonceSections
     * const annonceSection = await prisma.annonceSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnnonceSections and only return the `id`
     * const annonceSectionWithIdOnly = await prisma.annonceSection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnnonceSectionUpdateManyAndReturnArgs>(args: SelectSubset<T, AnnonceSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnonceSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnnonceSection.
     * @param {AnnonceSectionUpsertArgs} args - Arguments to update or create a AnnonceSection.
     * @example
     * // Update or create a AnnonceSection
     * const annonceSection = await prisma.annonceSection.upsert({
     *   create: {
     *     // ... data to create a AnnonceSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnnonceSection we want to update
     *   }
     * })
     */
    upsert<T extends AnnonceSectionUpsertArgs>(args: SelectSubset<T, AnnonceSectionUpsertArgs<ExtArgs>>): Prisma__AnnonceSectionClient<$Result.GetResult<Prisma.$AnnonceSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnnonceSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceSectionCountArgs} args - Arguments to filter AnnonceSections to count.
     * @example
     * // Count the number of AnnonceSections
     * const count = await prisma.annonceSection.count({
     *   where: {
     *     // ... the filter for the AnnonceSections we want to count
     *   }
     * })
    **/
    count<T extends AnnonceSectionCountArgs>(
      args?: Subset<T, AnnonceSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnonceSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnnonceSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnnonceSectionAggregateArgs>(args: Subset<T, AnnonceSectionAggregateArgs>): Prisma.PrismaPromise<GetAnnonceSectionAggregateType<T>>

    /**
     * Group by AnnonceSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceSectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnnonceSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnonceSectionGroupByArgs['orderBy'] }
        : { orderBy?: AnnonceSectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnnonceSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnonceSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnnonceSection model
   */
  readonly fields: AnnonceSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnnonceSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnonceSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    annonce<T extends AnnoncesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnnoncesDefaultArgs<ExtArgs>>): Prisma__AnnoncesClient<$Result.GetResult<Prisma.$AnnoncesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AnnonceSection model
   */
  interface AnnonceSectionFieldRefs {
    readonly id: FieldRef<"AnnonceSection", 'Int'>
    readonly annonceId: FieldRef<"AnnonceSection", 'Int'>
    readonly ordre: FieldRef<"AnnonceSection", 'Int'>
    readonly type: FieldRef<"AnnonceSection", 'TypeSection'>
    readonly contenu: FieldRef<"AnnonceSection", 'String'>
    readonly imageUrl: FieldRef<"AnnonceSection", 'String'>
    readonly videoUrl: FieldRef<"AnnonceSection", 'String'>
    readonly createdAt: FieldRef<"AnnonceSection", 'DateTime'>
    readonly updatedAt: FieldRef<"AnnonceSection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnnonceSection findUnique
   */
  export type AnnonceSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnonceSection
     */
    select?: AnnonceSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnonceSection
     */
    omit?: AnnonceSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceSectionInclude<ExtArgs> | null
    /**
     * Filter, which AnnonceSection to fetch.
     */
    where: AnnonceSectionWhereUniqueInput
  }

  /**
   * AnnonceSection findUniqueOrThrow
   */
  export type AnnonceSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnonceSection
     */
    select?: AnnonceSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnonceSection
     */
    omit?: AnnonceSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceSectionInclude<ExtArgs> | null
    /**
     * Filter, which AnnonceSection to fetch.
     */
    where: AnnonceSectionWhereUniqueInput
  }

  /**
   * AnnonceSection findFirst
   */
  export type AnnonceSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnonceSection
     */
    select?: AnnonceSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnonceSection
     */
    omit?: AnnonceSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceSectionInclude<ExtArgs> | null
    /**
     * Filter, which AnnonceSection to fetch.
     */
    where?: AnnonceSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnnonceSections to fetch.
     */
    orderBy?: AnnonceSectionOrderByWithRelationInput | AnnonceSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnnonceSections.
     */
    cursor?: AnnonceSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnnonceSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnnonceSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnnonceSections.
     */
    distinct?: AnnonceSectionScalarFieldEnum | AnnonceSectionScalarFieldEnum[]
  }

  /**
   * AnnonceSection findFirstOrThrow
   */
  export type AnnonceSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnonceSection
     */
    select?: AnnonceSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnonceSection
     */
    omit?: AnnonceSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceSectionInclude<ExtArgs> | null
    /**
     * Filter, which AnnonceSection to fetch.
     */
    where?: AnnonceSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnnonceSections to fetch.
     */
    orderBy?: AnnonceSectionOrderByWithRelationInput | AnnonceSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnnonceSections.
     */
    cursor?: AnnonceSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnnonceSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnnonceSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnnonceSections.
     */
    distinct?: AnnonceSectionScalarFieldEnum | AnnonceSectionScalarFieldEnum[]
  }

  /**
   * AnnonceSection findMany
   */
  export type AnnonceSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnonceSection
     */
    select?: AnnonceSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnonceSection
     */
    omit?: AnnonceSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceSectionInclude<ExtArgs> | null
    /**
     * Filter, which AnnonceSections to fetch.
     */
    where?: AnnonceSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnnonceSections to fetch.
     */
    orderBy?: AnnonceSectionOrderByWithRelationInput | AnnonceSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnnonceSections.
     */
    cursor?: AnnonceSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnnonceSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnnonceSections.
     */
    skip?: number
    distinct?: AnnonceSectionScalarFieldEnum | AnnonceSectionScalarFieldEnum[]
  }

  /**
   * AnnonceSection create
   */
  export type AnnonceSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnonceSection
     */
    select?: AnnonceSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnonceSection
     */
    omit?: AnnonceSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a AnnonceSection.
     */
    data: XOR<AnnonceSectionCreateInput, AnnonceSectionUncheckedCreateInput>
  }

  /**
   * AnnonceSection createMany
   */
  export type AnnonceSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnnonceSections.
     */
    data: AnnonceSectionCreateManyInput | AnnonceSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnnonceSection createManyAndReturn
   */
  export type AnnonceSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnonceSection
     */
    select?: AnnonceSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnnonceSection
     */
    omit?: AnnonceSectionOmit<ExtArgs> | null
    /**
     * The data used to create many AnnonceSections.
     */
    data: AnnonceSectionCreateManyInput | AnnonceSectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceSectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnnonceSection update
   */
  export type AnnonceSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnonceSection
     */
    select?: AnnonceSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnonceSection
     */
    omit?: AnnonceSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a AnnonceSection.
     */
    data: XOR<AnnonceSectionUpdateInput, AnnonceSectionUncheckedUpdateInput>
    /**
     * Choose, which AnnonceSection to update.
     */
    where: AnnonceSectionWhereUniqueInput
  }

  /**
   * AnnonceSection updateMany
   */
  export type AnnonceSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnnonceSections.
     */
    data: XOR<AnnonceSectionUpdateManyMutationInput, AnnonceSectionUncheckedUpdateManyInput>
    /**
     * Filter which AnnonceSections to update
     */
    where?: AnnonceSectionWhereInput
    /**
     * Limit how many AnnonceSections to update.
     */
    limit?: number
  }

  /**
   * AnnonceSection updateManyAndReturn
   */
  export type AnnonceSectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnonceSection
     */
    select?: AnnonceSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnnonceSection
     */
    omit?: AnnonceSectionOmit<ExtArgs> | null
    /**
     * The data used to update AnnonceSections.
     */
    data: XOR<AnnonceSectionUpdateManyMutationInput, AnnonceSectionUncheckedUpdateManyInput>
    /**
     * Filter which AnnonceSections to update
     */
    where?: AnnonceSectionWhereInput
    /**
     * Limit how many AnnonceSections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceSectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnnonceSection upsert
   */
  export type AnnonceSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnonceSection
     */
    select?: AnnonceSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnonceSection
     */
    omit?: AnnonceSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the AnnonceSection to update in case it exists.
     */
    where: AnnonceSectionWhereUniqueInput
    /**
     * In case the AnnonceSection found by the `where` argument doesn't exist, create a new AnnonceSection with this data.
     */
    create: XOR<AnnonceSectionCreateInput, AnnonceSectionUncheckedCreateInput>
    /**
     * In case the AnnonceSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnonceSectionUpdateInput, AnnonceSectionUncheckedUpdateInput>
  }

  /**
   * AnnonceSection delete
   */
  export type AnnonceSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnonceSection
     */
    select?: AnnonceSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnonceSection
     */
    omit?: AnnonceSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceSectionInclude<ExtArgs> | null
    /**
     * Filter which AnnonceSection to delete.
     */
    where: AnnonceSectionWhereUniqueInput
  }

  /**
   * AnnonceSection deleteMany
   */
  export type AnnonceSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnnonceSections to delete
     */
    where?: AnnonceSectionWhereInput
    /**
     * Limit how many AnnonceSections to delete.
     */
    limit?: number
  }

  /**
   * AnnonceSection without action
   */
  export type AnnonceSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnonceSection
     */
    select?: AnnonceSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnonceSection
     */
    omit?: AnnonceSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnonceSectionInclude<ExtArgs> | null
  }


  /**
   * Model Horaire
   */

  export type AggregateHoraire = {
    _count: HoraireCountAggregateOutputType | null
    _avg: HoraireAvgAggregateOutputType | null
    _sum: HoraireSumAggregateOutputType | null
    _min: HoraireMinAggregateOutputType | null
    _max: HoraireMaxAggregateOutputType | null
  }

  export type HoraireAvgAggregateOutputType = {
    id: number | null
  }

  export type HoraireSumAggregateOutputType = {
    id: number | null
  }

  export type HoraireMinAggregateOutputType = {
    id: number | null
    jour: string | null
    ouverture: string | null
    fermeture: string | null
    status: boolean | null
    typecommerce: $Enums.TypeCommerce | null
  }

  export type HoraireMaxAggregateOutputType = {
    id: number | null
    jour: string | null
    ouverture: string | null
    fermeture: string | null
    status: boolean | null
    typecommerce: $Enums.TypeCommerce | null
  }

  export type HoraireCountAggregateOutputType = {
    id: number
    jour: number
    ouverture: number
    fermeture: number
    status: number
    typecommerce: number
    _all: number
  }


  export type HoraireAvgAggregateInputType = {
    id?: true
  }

  export type HoraireSumAggregateInputType = {
    id?: true
  }

  export type HoraireMinAggregateInputType = {
    id?: true
    jour?: true
    ouverture?: true
    fermeture?: true
    status?: true
    typecommerce?: true
  }

  export type HoraireMaxAggregateInputType = {
    id?: true
    jour?: true
    ouverture?: true
    fermeture?: true
    status?: true
    typecommerce?: true
  }

  export type HoraireCountAggregateInputType = {
    id?: true
    jour?: true
    ouverture?: true
    fermeture?: true
    status?: true
    typecommerce?: true
    _all?: true
  }

  export type HoraireAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Horaire to aggregate.
     */
    where?: HoraireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Horaires to fetch.
     */
    orderBy?: HoraireOrderByWithRelationInput | HoraireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HoraireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Horaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Horaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Horaires
    **/
    _count?: true | HoraireCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HoraireAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HoraireSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HoraireMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HoraireMaxAggregateInputType
  }

  export type GetHoraireAggregateType<T extends HoraireAggregateArgs> = {
        [P in keyof T & keyof AggregateHoraire]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHoraire[P]>
      : GetScalarType<T[P], AggregateHoraire[P]>
  }




  export type HoraireGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoraireWhereInput
    orderBy?: HoraireOrderByWithAggregationInput | HoraireOrderByWithAggregationInput[]
    by: HoraireScalarFieldEnum[] | HoraireScalarFieldEnum
    having?: HoraireScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HoraireCountAggregateInputType | true
    _avg?: HoraireAvgAggregateInputType
    _sum?: HoraireSumAggregateInputType
    _min?: HoraireMinAggregateInputType
    _max?: HoraireMaxAggregateInputType
  }

  export type HoraireGroupByOutputType = {
    id: number
    jour: string
    ouverture: string
    fermeture: string
    status: boolean
    typecommerce: $Enums.TypeCommerce
    _count: HoraireCountAggregateOutputType | null
    _avg: HoraireAvgAggregateOutputType | null
    _sum: HoraireSumAggregateOutputType | null
    _min: HoraireMinAggregateOutputType | null
    _max: HoraireMaxAggregateOutputType | null
  }

  type GetHoraireGroupByPayload<T extends HoraireGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HoraireGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HoraireGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HoraireGroupByOutputType[P]>
            : GetScalarType<T[P], HoraireGroupByOutputType[P]>
        }
      >
    >


  export type HoraireSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jour?: boolean
    ouverture?: boolean
    fermeture?: boolean
    status?: boolean
    typecommerce?: boolean
  }, ExtArgs["result"]["horaire"]>

  export type HoraireSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jour?: boolean
    ouverture?: boolean
    fermeture?: boolean
    status?: boolean
    typecommerce?: boolean
  }, ExtArgs["result"]["horaire"]>

  export type HoraireSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jour?: boolean
    ouverture?: boolean
    fermeture?: boolean
    status?: boolean
    typecommerce?: boolean
  }, ExtArgs["result"]["horaire"]>

  export type HoraireSelectScalar = {
    id?: boolean
    jour?: boolean
    ouverture?: boolean
    fermeture?: boolean
    status?: boolean
    typecommerce?: boolean
  }

  export type HoraireOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jour" | "ouverture" | "fermeture" | "status" | "typecommerce", ExtArgs["result"]["horaire"]>

  export type $HorairePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Horaire"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jour: string
      ouverture: string
      fermeture: string
      status: boolean
      typecommerce: $Enums.TypeCommerce
    }, ExtArgs["result"]["horaire"]>
    composites: {}
  }

  type HoraireGetPayload<S extends boolean | null | undefined | HoraireDefaultArgs> = $Result.GetResult<Prisma.$HorairePayload, S>

  type HoraireCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HoraireFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HoraireCountAggregateInputType | true
    }

  export interface HoraireDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Horaire'], meta: { name: 'Horaire' } }
    /**
     * Find zero or one Horaire that matches the filter.
     * @param {HoraireFindUniqueArgs} args - Arguments to find a Horaire
     * @example
     * // Get one Horaire
     * const horaire = await prisma.horaire.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HoraireFindUniqueArgs>(args: SelectSubset<T, HoraireFindUniqueArgs<ExtArgs>>): Prisma__HoraireClient<$Result.GetResult<Prisma.$HorairePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Horaire that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HoraireFindUniqueOrThrowArgs} args - Arguments to find a Horaire
     * @example
     * // Get one Horaire
     * const horaire = await prisma.horaire.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HoraireFindUniqueOrThrowArgs>(args: SelectSubset<T, HoraireFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HoraireClient<$Result.GetResult<Prisma.$HorairePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Horaire that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoraireFindFirstArgs} args - Arguments to find a Horaire
     * @example
     * // Get one Horaire
     * const horaire = await prisma.horaire.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HoraireFindFirstArgs>(args?: SelectSubset<T, HoraireFindFirstArgs<ExtArgs>>): Prisma__HoraireClient<$Result.GetResult<Prisma.$HorairePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Horaire that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoraireFindFirstOrThrowArgs} args - Arguments to find a Horaire
     * @example
     * // Get one Horaire
     * const horaire = await prisma.horaire.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HoraireFindFirstOrThrowArgs>(args?: SelectSubset<T, HoraireFindFirstOrThrowArgs<ExtArgs>>): Prisma__HoraireClient<$Result.GetResult<Prisma.$HorairePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Horaires that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoraireFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Horaires
     * const horaires = await prisma.horaire.findMany()
     * 
     * // Get first 10 Horaires
     * const horaires = await prisma.horaire.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const horaireWithIdOnly = await prisma.horaire.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HoraireFindManyArgs>(args?: SelectSubset<T, HoraireFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Horaire.
     * @param {HoraireCreateArgs} args - Arguments to create a Horaire.
     * @example
     * // Create one Horaire
     * const Horaire = await prisma.horaire.create({
     *   data: {
     *     // ... data to create a Horaire
     *   }
     * })
     * 
     */
    create<T extends HoraireCreateArgs>(args: SelectSubset<T, HoraireCreateArgs<ExtArgs>>): Prisma__HoraireClient<$Result.GetResult<Prisma.$HorairePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Horaires.
     * @param {HoraireCreateManyArgs} args - Arguments to create many Horaires.
     * @example
     * // Create many Horaires
     * const horaire = await prisma.horaire.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HoraireCreateManyArgs>(args?: SelectSubset<T, HoraireCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Horaires and returns the data saved in the database.
     * @param {HoraireCreateManyAndReturnArgs} args - Arguments to create many Horaires.
     * @example
     * // Create many Horaires
     * const horaire = await prisma.horaire.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Horaires and only return the `id`
     * const horaireWithIdOnly = await prisma.horaire.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HoraireCreateManyAndReturnArgs>(args?: SelectSubset<T, HoraireCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorairePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Horaire.
     * @param {HoraireDeleteArgs} args - Arguments to delete one Horaire.
     * @example
     * // Delete one Horaire
     * const Horaire = await prisma.horaire.delete({
     *   where: {
     *     // ... filter to delete one Horaire
     *   }
     * })
     * 
     */
    delete<T extends HoraireDeleteArgs>(args: SelectSubset<T, HoraireDeleteArgs<ExtArgs>>): Prisma__HoraireClient<$Result.GetResult<Prisma.$HorairePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Horaire.
     * @param {HoraireUpdateArgs} args - Arguments to update one Horaire.
     * @example
     * // Update one Horaire
     * const horaire = await prisma.horaire.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HoraireUpdateArgs>(args: SelectSubset<T, HoraireUpdateArgs<ExtArgs>>): Prisma__HoraireClient<$Result.GetResult<Prisma.$HorairePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Horaires.
     * @param {HoraireDeleteManyArgs} args - Arguments to filter Horaires to delete.
     * @example
     * // Delete a few Horaires
     * const { count } = await prisma.horaire.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HoraireDeleteManyArgs>(args?: SelectSubset<T, HoraireDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Horaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoraireUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Horaires
     * const horaire = await prisma.horaire.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HoraireUpdateManyArgs>(args: SelectSubset<T, HoraireUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Horaires and returns the data updated in the database.
     * @param {HoraireUpdateManyAndReturnArgs} args - Arguments to update many Horaires.
     * @example
     * // Update many Horaires
     * const horaire = await prisma.horaire.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Horaires and only return the `id`
     * const horaireWithIdOnly = await prisma.horaire.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HoraireUpdateManyAndReturnArgs>(args: SelectSubset<T, HoraireUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HorairePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Horaire.
     * @param {HoraireUpsertArgs} args - Arguments to update or create a Horaire.
     * @example
     * // Update or create a Horaire
     * const horaire = await prisma.horaire.upsert({
     *   create: {
     *     // ... data to create a Horaire
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Horaire we want to update
     *   }
     * })
     */
    upsert<T extends HoraireUpsertArgs>(args: SelectSubset<T, HoraireUpsertArgs<ExtArgs>>): Prisma__HoraireClient<$Result.GetResult<Prisma.$HorairePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Horaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoraireCountArgs} args - Arguments to filter Horaires to count.
     * @example
     * // Count the number of Horaires
     * const count = await prisma.horaire.count({
     *   where: {
     *     // ... the filter for the Horaires we want to count
     *   }
     * })
    **/
    count<T extends HoraireCountArgs>(
      args?: Subset<T, HoraireCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HoraireCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Horaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoraireAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HoraireAggregateArgs>(args: Subset<T, HoraireAggregateArgs>): Prisma.PrismaPromise<GetHoraireAggregateType<T>>

    /**
     * Group by Horaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoraireGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HoraireGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HoraireGroupByArgs['orderBy'] }
        : { orderBy?: HoraireGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HoraireGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHoraireGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Horaire model
   */
  readonly fields: HoraireFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Horaire.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HoraireClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Horaire model
   */
  interface HoraireFieldRefs {
    readonly id: FieldRef<"Horaire", 'Int'>
    readonly jour: FieldRef<"Horaire", 'String'>
    readonly ouverture: FieldRef<"Horaire", 'String'>
    readonly fermeture: FieldRef<"Horaire", 'String'>
    readonly status: FieldRef<"Horaire", 'Boolean'>
    readonly typecommerce: FieldRef<"Horaire", 'TypeCommerce'>
  }
    

  // Custom InputTypes
  /**
   * Horaire findUnique
   */
  export type HoraireFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horaire
     */
    select?: HoraireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horaire
     */
    omit?: HoraireOmit<ExtArgs> | null
    /**
     * Filter, which Horaire to fetch.
     */
    where: HoraireWhereUniqueInput
  }

  /**
   * Horaire findUniqueOrThrow
   */
  export type HoraireFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horaire
     */
    select?: HoraireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horaire
     */
    omit?: HoraireOmit<ExtArgs> | null
    /**
     * Filter, which Horaire to fetch.
     */
    where: HoraireWhereUniqueInput
  }

  /**
   * Horaire findFirst
   */
  export type HoraireFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horaire
     */
    select?: HoraireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horaire
     */
    omit?: HoraireOmit<ExtArgs> | null
    /**
     * Filter, which Horaire to fetch.
     */
    where?: HoraireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Horaires to fetch.
     */
    orderBy?: HoraireOrderByWithRelationInput | HoraireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Horaires.
     */
    cursor?: HoraireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Horaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Horaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Horaires.
     */
    distinct?: HoraireScalarFieldEnum | HoraireScalarFieldEnum[]
  }

  /**
   * Horaire findFirstOrThrow
   */
  export type HoraireFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horaire
     */
    select?: HoraireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horaire
     */
    omit?: HoraireOmit<ExtArgs> | null
    /**
     * Filter, which Horaire to fetch.
     */
    where?: HoraireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Horaires to fetch.
     */
    orderBy?: HoraireOrderByWithRelationInput | HoraireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Horaires.
     */
    cursor?: HoraireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Horaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Horaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Horaires.
     */
    distinct?: HoraireScalarFieldEnum | HoraireScalarFieldEnum[]
  }

  /**
   * Horaire findMany
   */
  export type HoraireFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horaire
     */
    select?: HoraireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horaire
     */
    omit?: HoraireOmit<ExtArgs> | null
    /**
     * Filter, which Horaires to fetch.
     */
    where?: HoraireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Horaires to fetch.
     */
    orderBy?: HoraireOrderByWithRelationInput | HoraireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Horaires.
     */
    cursor?: HoraireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Horaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Horaires.
     */
    skip?: number
    distinct?: HoraireScalarFieldEnum | HoraireScalarFieldEnum[]
  }

  /**
   * Horaire create
   */
  export type HoraireCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horaire
     */
    select?: HoraireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horaire
     */
    omit?: HoraireOmit<ExtArgs> | null
    /**
     * The data needed to create a Horaire.
     */
    data: XOR<HoraireCreateInput, HoraireUncheckedCreateInput>
  }

  /**
   * Horaire createMany
   */
  export type HoraireCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Horaires.
     */
    data: HoraireCreateManyInput | HoraireCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Horaire createManyAndReturn
   */
  export type HoraireCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horaire
     */
    select?: HoraireSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Horaire
     */
    omit?: HoraireOmit<ExtArgs> | null
    /**
     * The data used to create many Horaires.
     */
    data: HoraireCreateManyInput | HoraireCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Horaire update
   */
  export type HoraireUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horaire
     */
    select?: HoraireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horaire
     */
    omit?: HoraireOmit<ExtArgs> | null
    /**
     * The data needed to update a Horaire.
     */
    data: XOR<HoraireUpdateInput, HoraireUncheckedUpdateInput>
    /**
     * Choose, which Horaire to update.
     */
    where: HoraireWhereUniqueInput
  }

  /**
   * Horaire updateMany
   */
  export type HoraireUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Horaires.
     */
    data: XOR<HoraireUpdateManyMutationInput, HoraireUncheckedUpdateManyInput>
    /**
     * Filter which Horaires to update
     */
    where?: HoraireWhereInput
    /**
     * Limit how many Horaires to update.
     */
    limit?: number
  }

  /**
   * Horaire updateManyAndReturn
   */
  export type HoraireUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horaire
     */
    select?: HoraireSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Horaire
     */
    omit?: HoraireOmit<ExtArgs> | null
    /**
     * The data used to update Horaires.
     */
    data: XOR<HoraireUpdateManyMutationInput, HoraireUncheckedUpdateManyInput>
    /**
     * Filter which Horaires to update
     */
    where?: HoraireWhereInput
    /**
     * Limit how many Horaires to update.
     */
    limit?: number
  }

  /**
   * Horaire upsert
   */
  export type HoraireUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horaire
     */
    select?: HoraireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horaire
     */
    omit?: HoraireOmit<ExtArgs> | null
    /**
     * The filter to search for the Horaire to update in case it exists.
     */
    where: HoraireWhereUniqueInput
    /**
     * In case the Horaire found by the `where` argument doesn't exist, create a new Horaire with this data.
     */
    create: XOR<HoraireCreateInput, HoraireUncheckedCreateInput>
    /**
     * In case the Horaire was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HoraireUpdateInput, HoraireUncheckedUpdateInput>
  }

  /**
   * Horaire delete
   */
  export type HoraireDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horaire
     */
    select?: HoraireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horaire
     */
    omit?: HoraireOmit<ExtArgs> | null
    /**
     * Filter which Horaire to delete.
     */
    where: HoraireWhereUniqueInput
  }

  /**
   * Horaire deleteMany
   */
  export type HoraireDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Horaires to delete
     */
    where?: HoraireWhereInput
    /**
     * Limit how many Horaires to delete.
     */
    limit?: number
  }

  /**
   * Horaire without action
   */
  export type HoraireDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Horaire
     */
    select?: HoraireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Horaire
     */
    omit?: HoraireOmit<ExtArgs> | null
  }


  /**
   * Model Histoire
   */

  export type AggregateHistoire = {
    _count: HistoireCountAggregateOutputType | null
    _avg: HistoireAvgAggregateOutputType | null
    _sum: HistoireSumAggregateOutputType | null
    _min: HistoireMinAggregateOutputType | null
    _max: HistoireMaxAggregateOutputType | null
  }

  export type HistoireAvgAggregateOutputType = {
    id: number | null
    annee: number | null
  }

  export type HistoireSumAggregateOutputType = {
    id: number | null
    annee: number | null
  }

  export type HistoireMinAggregateOutputType = {
    id: number | null
    titre: string | null
    annee: number | null
    description: string | null
    imageUrl: string | null
  }

  export type HistoireMaxAggregateOutputType = {
    id: number | null
    titre: string | null
    annee: number | null
    description: string | null
    imageUrl: string | null
  }

  export type HistoireCountAggregateOutputType = {
    id: number
    titre: number
    annee: number
    description: number
    imageUrl: number
    _all: number
  }


  export type HistoireAvgAggregateInputType = {
    id?: true
    annee?: true
  }

  export type HistoireSumAggregateInputType = {
    id?: true
    annee?: true
  }

  export type HistoireMinAggregateInputType = {
    id?: true
    titre?: true
    annee?: true
    description?: true
    imageUrl?: true
  }

  export type HistoireMaxAggregateInputType = {
    id?: true
    titre?: true
    annee?: true
    description?: true
    imageUrl?: true
  }

  export type HistoireCountAggregateInputType = {
    id?: true
    titre?: true
    annee?: true
    description?: true
    imageUrl?: true
    _all?: true
  }

  export type HistoireAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Histoire to aggregate.
     */
    where?: HistoireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histoires to fetch.
     */
    orderBy?: HistoireOrderByWithRelationInput | HistoireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histoires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histoires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Histoires
    **/
    _count?: true | HistoireCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoireAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistoireSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoireMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoireMaxAggregateInputType
  }

  export type GetHistoireAggregateType<T extends HistoireAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoire]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoire[P]>
      : GetScalarType<T[P], AggregateHistoire[P]>
  }




  export type HistoireGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoireWhereInput
    orderBy?: HistoireOrderByWithAggregationInput | HistoireOrderByWithAggregationInput[]
    by: HistoireScalarFieldEnum[] | HistoireScalarFieldEnum
    having?: HistoireScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoireCountAggregateInputType | true
    _avg?: HistoireAvgAggregateInputType
    _sum?: HistoireSumAggregateInputType
    _min?: HistoireMinAggregateInputType
    _max?: HistoireMaxAggregateInputType
  }

  export type HistoireGroupByOutputType = {
    id: number
    titre: string
    annee: number
    description: string
    imageUrl: string
    _count: HistoireCountAggregateOutputType | null
    _avg: HistoireAvgAggregateOutputType | null
    _sum: HistoireSumAggregateOutputType | null
    _min: HistoireMinAggregateOutputType | null
    _max: HistoireMaxAggregateOutputType | null
  }

  type GetHistoireGroupByPayload<T extends HistoireGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoireGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoireGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoireGroupByOutputType[P]>
            : GetScalarType<T[P], HistoireGroupByOutputType[P]>
        }
      >
    >


  export type HistoireSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    annee?: boolean
    description?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["histoire"]>

  export type HistoireSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    annee?: boolean
    description?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["histoire"]>

  export type HistoireSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    annee?: boolean
    description?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["histoire"]>

  export type HistoireSelectScalar = {
    id?: boolean
    titre?: boolean
    annee?: boolean
    description?: boolean
    imageUrl?: boolean
  }

  export type HistoireOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titre" | "annee" | "description" | "imageUrl", ExtArgs["result"]["histoire"]>

  export type $HistoirePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Histoire"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titre: string
      annee: number
      description: string
      imageUrl: string
    }, ExtArgs["result"]["histoire"]>
    composites: {}
  }

  type HistoireGetPayload<S extends boolean | null | undefined | HistoireDefaultArgs> = $Result.GetResult<Prisma.$HistoirePayload, S>

  type HistoireCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoireFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoireCountAggregateInputType | true
    }

  export interface HistoireDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Histoire'], meta: { name: 'Histoire' } }
    /**
     * Find zero or one Histoire that matches the filter.
     * @param {HistoireFindUniqueArgs} args - Arguments to find a Histoire
     * @example
     * // Get one Histoire
     * const histoire = await prisma.histoire.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoireFindUniqueArgs>(args: SelectSubset<T, HistoireFindUniqueArgs<ExtArgs>>): Prisma__HistoireClient<$Result.GetResult<Prisma.$HistoirePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Histoire that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoireFindUniqueOrThrowArgs} args - Arguments to find a Histoire
     * @example
     * // Get one Histoire
     * const histoire = await prisma.histoire.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoireFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoireFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoireClient<$Result.GetResult<Prisma.$HistoirePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Histoire that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoireFindFirstArgs} args - Arguments to find a Histoire
     * @example
     * // Get one Histoire
     * const histoire = await prisma.histoire.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoireFindFirstArgs>(args?: SelectSubset<T, HistoireFindFirstArgs<ExtArgs>>): Prisma__HistoireClient<$Result.GetResult<Prisma.$HistoirePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Histoire that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoireFindFirstOrThrowArgs} args - Arguments to find a Histoire
     * @example
     * // Get one Histoire
     * const histoire = await prisma.histoire.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoireFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoireFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoireClient<$Result.GetResult<Prisma.$HistoirePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Histoires that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoireFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Histoires
     * const histoires = await prisma.histoire.findMany()
     * 
     * // Get first 10 Histoires
     * const histoires = await prisma.histoire.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const histoireWithIdOnly = await prisma.histoire.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoireFindManyArgs>(args?: SelectSubset<T, HistoireFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoirePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Histoire.
     * @param {HistoireCreateArgs} args - Arguments to create a Histoire.
     * @example
     * // Create one Histoire
     * const Histoire = await prisma.histoire.create({
     *   data: {
     *     // ... data to create a Histoire
     *   }
     * })
     * 
     */
    create<T extends HistoireCreateArgs>(args: SelectSubset<T, HistoireCreateArgs<ExtArgs>>): Prisma__HistoireClient<$Result.GetResult<Prisma.$HistoirePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Histoires.
     * @param {HistoireCreateManyArgs} args - Arguments to create many Histoires.
     * @example
     * // Create many Histoires
     * const histoire = await prisma.histoire.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoireCreateManyArgs>(args?: SelectSubset<T, HistoireCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Histoires and returns the data saved in the database.
     * @param {HistoireCreateManyAndReturnArgs} args - Arguments to create many Histoires.
     * @example
     * // Create many Histoires
     * const histoire = await prisma.histoire.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Histoires and only return the `id`
     * const histoireWithIdOnly = await prisma.histoire.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoireCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoireCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoirePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Histoire.
     * @param {HistoireDeleteArgs} args - Arguments to delete one Histoire.
     * @example
     * // Delete one Histoire
     * const Histoire = await prisma.histoire.delete({
     *   where: {
     *     // ... filter to delete one Histoire
     *   }
     * })
     * 
     */
    delete<T extends HistoireDeleteArgs>(args: SelectSubset<T, HistoireDeleteArgs<ExtArgs>>): Prisma__HistoireClient<$Result.GetResult<Prisma.$HistoirePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Histoire.
     * @param {HistoireUpdateArgs} args - Arguments to update one Histoire.
     * @example
     * // Update one Histoire
     * const histoire = await prisma.histoire.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoireUpdateArgs>(args: SelectSubset<T, HistoireUpdateArgs<ExtArgs>>): Prisma__HistoireClient<$Result.GetResult<Prisma.$HistoirePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Histoires.
     * @param {HistoireDeleteManyArgs} args - Arguments to filter Histoires to delete.
     * @example
     * // Delete a few Histoires
     * const { count } = await prisma.histoire.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoireDeleteManyArgs>(args?: SelectSubset<T, HistoireDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Histoires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoireUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Histoires
     * const histoire = await prisma.histoire.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoireUpdateManyArgs>(args: SelectSubset<T, HistoireUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Histoires and returns the data updated in the database.
     * @param {HistoireUpdateManyAndReturnArgs} args - Arguments to update many Histoires.
     * @example
     * // Update many Histoires
     * const histoire = await prisma.histoire.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Histoires and only return the `id`
     * const histoireWithIdOnly = await prisma.histoire.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HistoireUpdateManyAndReturnArgs>(args: SelectSubset<T, HistoireUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoirePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Histoire.
     * @param {HistoireUpsertArgs} args - Arguments to update or create a Histoire.
     * @example
     * // Update or create a Histoire
     * const histoire = await prisma.histoire.upsert({
     *   create: {
     *     // ... data to create a Histoire
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Histoire we want to update
     *   }
     * })
     */
    upsert<T extends HistoireUpsertArgs>(args: SelectSubset<T, HistoireUpsertArgs<ExtArgs>>): Prisma__HistoireClient<$Result.GetResult<Prisma.$HistoirePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Histoires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoireCountArgs} args - Arguments to filter Histoires to count.
     * @example
     * // Count the number of Histoires
     * const count = await prisma.histoire.count({
     *   where: {
     *     // ... the filter for the Histoires we want to count
     *   }
     * })
    **/
    count<T extends HistoireCountArgs>(
      args?: Subset<T, HistoireCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoireCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Histoire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoireAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HistoireAggregateArgs>(args: Subset<T, HistoireAggregateArgs>): Prisma.PrismaPromise<GetHistoireAggregateType<T>>

    /**
     * Group by Histoire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoireGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HistoireGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoireGroupByArgs['orderBy'] }
        : { orderBy?: HistoireGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HistoireGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoireGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Histoire model
   */
  readonly fields: HistoireFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Histoire.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoireClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Histoire model
   */
  interface HistoireFieldRefs {
    readonly id: FieldRef<"Histoire", 'Int'>
    readonly titre: FieldRef<"Histoire", 'String'>
    readonly annee: FieldRef<"Histoire", 'Int'>
    readonly description: FieldRef<"Histoire", 'String'>
    readonly imageUrl: FieldRef<"Histoire", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Histoire findUnique
   */
  export type HistoireFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Histoire
     */
    select?: HistoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Histoire
     */
    omit?: HistoireOmit<ExtArgs> | null
    /**
     * Filter, which Histoire to fetch.
     */
    where: HistoireWhereUniqueInput
  }

  /**
   * Histoire findUniqueOrThrow
   */
  export type HistoireFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Histoire
     */
    select?: HistoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Histoire
     */
    omit?: HistoireOmit<ExtArgs> | null
    /**
     * Filter, which Histoire to fetch.
     */
    where: HistoireWhereUniqueInput
  }

  /**
   * Histoire findFirst
   */
  export type HistoireFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Histoire
     */
    select?: HistoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Histoire
     */
    omit?: HistoireOmit<ExtArgs> | null
    /**
     * Filter, which Histoire to fetch.
     */
    where?: HistoireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histoires to fetch.
     */
    orderBy?: HistoireOrderByWithRelationInput | HistoireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Histoires.
     */
    cursor?: HistoireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histoires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histoires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Histoires.
     */
    distinct?: HistoireScalarFieldEnum | HistoireScalarFieldEnum[]
  }

  /**
   * Histoire findFirstOrThrow
   */
  export type HistoireFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Histoire
     */
    select?: HistoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Histoire
     */
    omit?: HistoireOmit<ExtArgs> | null
    /**
     * Filter, which Histoire to fetch.
     */
    where?: HistoireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histoires to fetch.
     */
    orderBy?: HistoireOrderByWithRelationInput | HistoireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Histoires.
     */
    cursor?: HistoireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histoires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histoires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Histoires.
     */
    distinct?: HistoireScalarFieldEnum | HistoireScalarFieldEnum[]
  }

  /**
   * Histoire findMany
   */
  export type HistoireFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Histoire
     */
    select?: HistoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Histoire
     */
    omit?: HistoireOmit<ExtArgs> | null
    /**
     * Filter, which Histoires to fetch.
     */
    where?: HistoireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histoires to fetch.
     */
    orderBy?: HistoireOrderByWithRelationInput | HistoireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Histoires.
     */
    cursor?: HistoireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histoires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histoires.
     */
    skip?: number
    distinct?: HistoireScalarFieldEnum | HistoireScalarFieldEnum[]
  }

  /**
   * Histoire create
   */
  export type HistoireCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Histoire
     */
    select?: HistoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Histoire
     */
    omit?: HistoireOmit<ExtArgs> | null
    /**
     * The data needed to create a Histoire.
     */
    data: XOR<HistoireCreateInput, HistoireUncheckedCreateInput>
  }

  /**
   * Histoire createMany
   */
  export type HistoireCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Histoires.
     */
    data: HistoireCreateManyInput | HistoireCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Histoire createManyAndReturn
   */
  export type HistoireCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Histoire
     */
    select?: HistoireSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Histoire
     */
    omit?: HistoireOmit<ExtArgs> | null
    /**
     * The data used to create many Histoires.
     */
    data: HistoireCreateManyInput | HistoireCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Histoire update
   */
  export type HistoireUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Histoire
     */
    select?: HistoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Histoire
     */
    omit?: HistoireOmit<ExtArgs> | null
    /**
     * The data needed to update a Histoire.
     */
    data: XOR<HistoireUpdateInput, HistoireUncheckedUpdateInput>
    /**
     * Choose, which Histoire to update.
     */
    where: HistoireWhereUniqueInput
  }

  /**
   * Histoire updateMany
   */
  export type HistoireUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Histoires.
     */
    data: XOR<HistoireUpdateManyMutationInput, HistoireUncheckedUpdateManyInput>
    /**
     * Filter which Histoires to update
     */
    where?: HistoireWhereInput
    /**
     * Limit how many Histoires to update.
     */
    limit?: number
  }

  /**
   * Histoire updateManyAndReturn
   */
  export type HistoireUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Histoire
     */
    select?: HistoireSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Histoire
     */
    omit?: HistoireOmit<ExtArgs> | null
    /**
     * The data used to update Histoires.
     */
    data: XOR<HistoireUpdateManyMutationInput, HistoireUncheckedUpdateManyInput>
    /**
     * Filter which Histoires to update
     */
    where?: HistoireWhereInput
    /**
     * Limit how many Histoires to update.
     */
    limit?: number
  }

  /**
   * Histoire upsert
   */
  export type HistoireUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Histoire
     */
    select?: HistoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Histoire
     */
    omit?: HistoireOmit<ExtArgs> | null
    /**
     * The filter to search for the Histoire to update in case it exists.
     */
    where: HistoireWhereUniqueInput
    /**
     * In case the Histoire found by the `where` argument doesn't exist, create a new Histoire with this data.
     */
    create: XOR<HistoireCreateInput, HistoireUncheckedCreateInput>
    /**
     * In case the Histoire was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoireUpdateInput, HistoireUncheckedUpdateInput>
  }

  /**
   * Histoire delete
   */
  export type HistoireDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Histoire
     */
    select?: HistoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Histoire
     */
    omit?: HistoireOmit<ExtArgs> | null
    /**
     * Filter which Histoire to delete.
     */
    where: HistoireWhereUniqueInput
  }

  /**
   * Histoire deleteMany
   */
  export type HistoireDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Histoires to delete
     */
    where?: HistoireWhereInput
    /**
     * Limit how many Histoires to delete.
     */
    limit?: number
  }

  /**
   * Histoire without action
   */
  export type HistoireDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Histoire
     */
    select?: HistoireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Histoire
     */
    omit?: HistoireOmit<ExtArgs> | null
  }


  /**
   * Model Commerce
   */

  export type AggregateCommerce = {
    _count: CommerceCountAggregateOutputType | null
    _avg: CommerceAvgAggregateOutputType | null
    _sum: CommerceSumAggregateOutputType | null
    _min: CommerceMinAggregateOutputType | null
    _max: CommerceMaxAggregateOutputType | null
  }

  export type CommerceAvgAggregateOutputType = {
    id: number | null
  }

  export type CommerceSumAggregateOutputType = {
    id: number | null
  }

  export type CommerceMinAggregateOutputType = {
    id: number | null
    titre: string | null
    description: string | null
    imageUrl: string | null
    type: $Enums.TypeCommerce | null
    datecreation: Date | null
    telephone: string | null
  }

  export type CommerceMaxAggregateOutputType = {
    id: number | null
    titre: string | null
    description: string | null
    imageUrl: string | null
    type: $Enums.TypeCommerce | null
    datecreation: Date | null
    telephone: string | null
  }

  export type CommerceCountAggregateOutputType = {
    id: number
    titre: number
    description: number
    imageUrl: number
    type: number
    datecreation: number
    telephone: number
    _all: number
  }


  export type CommerceAvgAggregateInputType = {
    id?: true
  }

  export type CommerceSumAggregateInputType = {
    id?: true
  }

  export type CommerceMinAggregateInputType = {
    id?: true
    titre?: true
    description?: true
    imageUrl?: true
    type?: true
    datecreation?: true
    telephone?: true
  }

  export type CommerceMaxAggregateInputType = {
    id?: true
    titre?: true
    description?: true
    imageUrl?: true
    type?: true
    datecreation?: true
    telephone?: true
  }

  export type CommerceCountAggregateInputType = {
    id?: true
    titre?: true
    description?: true
    imageUrl?: true
    type?: true
    datecreation?: true
    telephone?: true
    _all?: true
  }

  export type CommerceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commerce to aggregate.
     */
    where?: CommerceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commerce to fetch.
     */
    orderBy?: CommerceOrderByWithRelationInput | CommerceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommerceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commerce from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commerce.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Commerce
    **/
    _count?: true | CommerceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommerceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommerceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommerceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommerceMaxAggregateInputType
  }

  export type GetCommerceAggregateType<T extends CommerceAggregateArgs> = {
        [P in keyof T & keyof AggregateCommerce]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommerce[P]>
      : GetScalarType<T[P], AggregateCommerce[P]>
  }




  export type CommerceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommerceWhereInput
    orderBy?: CommerceOrderByWithAggregationInput | CommerceOrderByWithAggregationInput[]
    by: CommerceScalarFieldEnum[] | CommerceScalarFieldEnum
    having?: CommerceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommerceCountAggregateInputType | true
    _avg?: CommerceAvgAggregateInputType
    _sum?: CommerceSumAggregateInputType
    _min?: CommerceMinAggregateInputType
    _max?: CommerceMaxAggregateInputType
  }

  export type CommerceGroupByOutputType = {
    id: number
    titre: string
    description: string
    imageUrl: string
    type: $Enums.TypeCommerce
    datecreation: Date
    telephone: string | null
    _count: CommerceCountAggregateOutputType | null
    _avg: CommerceAvgAggregateOutputType | null
    _sum: CommerceSumAggregateOutputType | null
    _min: CommerceMinAggregateOutputType | null
    _max: CommerceMaxAggregateOutputType | null
  }

  type GetCommerceGroupByPayload<T extends CommerceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommerceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommerceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommerceGroupByOutputType[P]>
            : GetScalarType<T[P], CommerceGroupByOutputType[P]>
        }
      >
    >


  export type CommerceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    description?: boolean
    imageUrl?: boolean
    type?: boolean
    datecreation?: boolean
    telephone?: boolean
    galerie?: boolean | Commerce$galerieArgs<ExtArgs>
    sections?: boolean | Commerce$sectionsArgs<ExtArgs>
    _count?: boolean | CommerceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commerce"]>

  export type CommerceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    description?: boolean
    imageUrl?: boolean
    type?: boolean
    datecreation?: boolean
    telephone?: boolean
  }, ExtArgs["result"]["commerce"]>

  export type CommerceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    description?: boolean
    imageUrl?: boolean
    type?: boolean
    datecreation?: boolean
    telephone?: boolean
  }, ExtArgs["result"]["commerce"]>

  export type CommerceSelectScalar = {
    id?: boolean
    titre?: boolean
    description?: boolean
    imageUrl?: boolean
    type?: boolean
    datecreation?: boolean
    telephone?: boolean
  }

  export type CommerceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titre" | "description" | "imageUrl" | "type" | "datecreation" | "telephone", ExtArgs["result"]["commerce"]>
  export type CommerceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    galerie?: boolean | Commerce$galerieArgs<ExtArgs>
    sections?: boolean | Commerce$sectionsArgs<ExtArgs>
    _count?: boolean | CommerceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommerceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CommerceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CommercePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Commerce"
    objects: {
      galerie: Prisma.$CommerceGaleriePayload<ExtArgs>[]
      sections: Prisma.$CommerceSectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titre: string
      description: string
      imageUrl: string
      type: $Enums.TypeCommerce
      datecreation: Date
      telephone: string | null
    }, ExtArgs["result"]["commerce"]>
    composites: {}
  }

  type CommerceGetPayload<S extends boolean | null | undefined | CommerceDefaultArgs> = $Result.GetResult<Prisma.$CommercePayload, S>

  type CommerceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommerceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommerceCountAggregateInputType | true
    }

  export interface CommerceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Commerce'], meta: { name: 'Commerce' } }
    /**
     * Find zero or one Commerce that matches the filter.
     * @param {CommerceFindUniqueArgs} args - Arguments to find a Commerce
     * @example
     * // Get one Commerce
     * const commerce = await prisma.commerce.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommerceFindUniqueArgs>(args: SelectSubset<T, CommerceFindUniqueArgs<ExtArgs>>): Prisma__CommerceClient<$Result.GetResult<Prisma.$CommercePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Commerce that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommerceFindUniqueOrThrowArgs} args - Arguments to find a Commerce
     * @example
     * // Get one Commerce
     * const commerce = await prisma.commerce.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommerceFindUniqueOrThrowArgs>(args: SelectSubset<T, CommerceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommerceClient<$Result.GetResult<Prisma.$CommercePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commerce that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommerceFindFirstArgs} args - Arguments to find a Commerce
     * @example
     * // Get one Commerce
     * const commerce = await prisma.commerce.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommerceFindFirstArgs>(args?: SelectSubset<T, CommerceFindFirstArgs<ExtArgs>>): Prisma__CommerceClient<$Result.GetResult<Prisma.$CommercePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commerce that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommerceFindFirstOrThrowArgs} args - Arguments to find a Commerce
     * @example
     * // Get one Commerce
     * const commerce = await prisma.commerce.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommerceFindFirstOrThrowArgs>(args?: SelectSubset<T, CommerceFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommerceClient<$Result.GetResult<Prisma.$CommercePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Commerce that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommerceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commerce
     * const commerce = await prisma.commerce.findMany()
     * 
     * // Get first 10 Commerce
     * const commerce = await prisma.commerce.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commerceWithIdOnly = await prisma.commerce.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommerceFindManyArgs>(args?: SelectSubset<T, CommerceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommercePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Commerce.
     * @param {CommerceCreateArgs} args - Arguments to create a Commerce.
     * @example
     * // Create one Commerce
     * const Commerce = await prisma.commerce.create({
     *   data: {
     *     // ... data to create a Commerce
     *   }
     * })
     * 
     */
    create<T extends CommerceCreateArgs>(args: SelectSubset<T, CommerceCreateArgs<ExtArgs>>): Prisma__CommerceClient<$Result.GetResult<Prisma.$CommercePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Commerce.
     * @param {CommerceCreateManyArgs} args - Arguments to create many Commerce.
     * @example
     * // Create many Commerce
     * const commerce = await prisma.commerce.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommerceCreateManyArgs>(args?: SelectSubset<T, CommerceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Commerce and returns the data saved in the database.
     * @param {CommerceCreateManyAndReturnArgs} args - Arguments to create many Commerce.
     * @example
     * // Create many Commerce
     * const commerce = await prisma.commerce.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Commerce and only return the `id`
     * const commerceWithIdOnly = await prisma.commerce.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommerceCreateManyAndReturnArgs>(args?: SelectSubset<T, CommerceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommercePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Commerce.
     * @param {CommerceDeleteArgs} args - Arguments to delete one Commerce.
     * @example
     * // Delete one Commerce
     * const Commerce = await prisma.commerce.delete({
     *   where: {
     *     // ... filter to delete one Commerce
     *   }
     * })
     * 
     */
    delete<T extends CommerceDeleteArgs>(args: SelectSubset<T, CommerceDeleteArgs<ExtArgs>>): Prisma__CommerceClient<$Result.GetResult<Prisma.$CommercePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Commerce.
     * @param {CommerceUpdateArgs} args - Arguments to update one Commerce.
     * @example
     * // Update one Commerce
     * const commerce = await prisma.commerce.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommerceUpdateArgs>(args: SelectSubset<T, CommerceUpdateArgs<ExtArgs>>): Prisma__CommerceClient<$Result.GetResult<Prisma.$CommercePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Commerce.
     * @param {CommerceDeleteManyArgs} args - Arguments to filter Commerce to delete.
     * @example
     * // Delete a few Commerce
     * const { count } = await prisma.commerce.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommerceDeleteManyArgs>(args?: SelectSubset<T, CommerceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commerce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommerceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commerce
     * const commerce = await prisma.commerce.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommerceUpdateManyArgs>(args: SelectSubset<T, CommerceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commerce and returns the data updated in the database.
     * @param {CommerceUpdateManyAndReturnArgs} args - Arguments to update many Commerce.
     * @example
     * // Update many Commerce
     * const commerce = await prisma.commerce.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Commerce and only return the `id`
     * const commerceWithIdOnly = await prisma.commerce.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommerceUpdateManyAndReturnArgs>(args: SelectSubset<T, CommerceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommercePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Commerce.
     * @param {CommerceUpsertArgs} args - Arguments to update or create a Commerce.
     * @example
     * // Update or create a Commerce
     * const commerce = await prisma.commerce.upsert({
     *   create: {
     *     // ... data to create a Commerce
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commerce we want to update
     *   }
     * })
     */
    upsert<T extends CommerceUpsertArgs>(args: SelectSubset<T, CommerceUpsertArgs<ExtArgs>>): Prisma__CommerceClient<$Result.GetResult<Prisma.$CommercePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Commerce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommerceCountArgs} args - Arguments to filter Commerce to count.
     * @example
     * // Count the number of Commerce
     * const count = await prisma.commerce.count({
     *   where: {
     *     // ... the filter for the Commerce we want to count
     *   }
     * })
    **/
    count<T extends CommerceCountArgs>(
      args?: Subset<T, CommerceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommerceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Commerce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommerceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommerceAggregateArgs>(args: Subset<T, CommerceAggregateArgs>): Prisma.PrismaPromise<GetCommerceAggregateType<T>>

    /**
     * Group by Commerce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommerceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommerceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommerceGroupByArgs['orderBy'] }
        : { orderBy?: CommerceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommerceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommerceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Commerce model
   */
  readonly fields: CommerceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Commerce.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommerceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    galerie<T extends Commerce$galerieArgs<ExtArgs> = {}>(args?: Subset<T, Commerce$galerieArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommerceGaleriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sections<T extends Commerce$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, Commerce$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommerceSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Commerce model
   */
  interface CommerceFieldRefs {
    readonly id: FieldRef<"Commerce", 'Int'>
    readonly titre: FieldRef<"Commerce", 'String'>
    readonly description: FieldRef<"Commerce", 'String'>
    readonly imageUrl: FieldRef<"Commerce", 'String'>
    readonly type: FieldRef<"Commerce", 'TypeCommerce'>
    readonly datecreation: FieldRef<"Commerce", 'DateTime'>
    readonly telephone: FieldRef<"Commerce", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Commerce findUnique
   */
  export type CommerceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commerce
     */
    select?: CommerceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commerce
     */
    omit?: CommerceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceInclude<ExtArgs> | null
    /**
     * Filter, which Commerce to fetch.
     */
    where: CommerceWhereUniqueInput
  }

  /**
   * Commerce findUniqueOrThrow
   */
  export type CommerceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commerce
     */
    select?: CommerceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commerce
     */
    omit?: CommerceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceInclude<ExtArgs> | null
    /**
     * Filter, which Commerce to fetch.
     */
    where: CommerceWhereUniqueInput
  }

  /**
   * Commerce findFirst
   */
  export type CommerceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commerce
     */
    select?: CommerceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commerce
     */
    omit?: CommerceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceInclude<ExtArgs> | null
    /**
     * Filter, which Commerce to fetch.
     */
    where?: CommerceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commerce to fetch.
     */
    orderBy?: CommerceOrderByWithRelationInput | CommerceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commerce.
     */
    cursor?: CommerceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commerce from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commerce.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commerce.
     */
    distinct?: CommerceScalarFieldEnum | CommerceScalarFieldEnum[]
  }

  /**
   * Commerce findFirstOrThrow
   */
  export type CommerceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commerce
     */
    select?: CommerceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commerce
     */
    omit?: CommerceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceInclude<ExtArgs> | null
    /**
     * Filter, which Commerce to fetch.
     */
    where?: CommerceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commerce to fetch.
     */
    orderBy?: CommerceOrderByWithRelationInput | CommerceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commerce.
     */
    cursor?: CommerceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commerce from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commerce.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commerce.
     */
    distinct?: CommerceScalarFieldEnum | CommerceScalarFieldEnum[]
  }

  /**
   * Commerce findMany
   */
  export type CommerceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commerce
     */
    select?: CommerceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commerce
     */
    omit?: CommerceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceInclude<ExtArgs> | null
    /**
     * Filter, which Commerce to fetch.
     */
    where?: CommerceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commerce to fetch.
     */
    orderBy?: CommerceOrderByWithRelationInput | CommerceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Commerce.
     */
    cursor?: CommerceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commerce from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commerce.
     */
    skip?: number
    distinct?: CommerceScalarFieldEnum | CommerceScalarFieldEnum[]
  }

  /**
   * Commerce create
   */
  export type CommerceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commerce
     */
    select?: CommerceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commerce
     */
    omit?: CommerceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceInclude<ExtArgs> | null
    /**
     * The data needed to create a Commerce.
     */
    data: XOR<CommerceCreateInput, CommerceUncheckedCreateInput>
  }

  /**
   * Commerce createMany
   */
  export type CommerceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Commerce.
     */
    data: CommerceCreateManyInput | CommerceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Commerce createManyAndReturn
   */
  export type CommerceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commerce
     */
    select?: CommerceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commerce
     */
    omit?: CommerceOmit<ExtArgs> | null
    /**
     * The data used to create many Commerce.
     */
    data: CommerceCreateManyInput | CommerceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Commerce update
   */
  export type CommerceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commerce
     */
    select?: CommerceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commerce
     */
    omit?: CommerceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceInclude<ExtArgs> | null
    /**
     * The data needed to update a Commerce.
     */
    data: XOR<CommerceUpdateInput, CommerceUncheckedUpdateInput>
    /**
     * Choose, which Commerce to update.
     */
    where: CommerceWhereUniqueInput
  }

  /**
   * Commerce updateMany
   */
  export type CommerceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Commerce.
     */
    data: XOR<CommerceUpdateManyMutationInput, CommerceUncheckedUpdateManyInput>
    /**
     * Filter which Commerce to update
     */
    where?: CommerceWhereInput
    /**
     * Limit how many Commerce to update.
     */
    limit?: number
  }

  /**
   * Commerce updateManyAndReturn
   */
  export type CommerceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commerce
     */
    select?: CommerceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commerce
     */
    omit?: CommerceOmit<ExtArgs> | null
    /**
     * The data used to update Commerce.
     */
    data: XOR<CommerceUpdateManyMutationInput, CommerceUncheckedUpdateManyInput>
    /**
     * Filter which Commerce to update
     */
    where?: CommerceWhereInput
    /**
     * Limit how many Commerce to update.
     */
    limit?: number
  }

  /**
   * Commerce upsert
   */
  export type CommerceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commerce
     */
    select?: CommerceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commerce
     */
    omit?: CommerceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceInclude<ExtArgs> | null
    /**
     * The filter to search for the Commerce to update in case it exists.
     */
    where: CommerceWhereUniqueInput
    /**
     * In case the Commerce found by the `where` argument doesn't exist, create a new Commerce with this data.
     */
    create: XOR<CommerceCreateInput, CommerceUncheckedCreateInput>
    /**
     * In case the Commerce was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommerceUpdateInput, CommerceUncheckedUpdateInput>
  }

  /**
   * Commerce delete
   */
  export type CommerceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commerce
     */
    select?: CommerceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commerce
     */
    omit?: CommerceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceInclude<ExtArgs> | null
    /**
     * Filter which Commerce to delete.
     */
    where: CommerceWhereUniqueInput
  }

  /**
   * Commerce deleteMany
   */
  export type CommerceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commerce to delete
     */
    where?: CommerceWhereInput
    /**
     * Limit how many Commerce to delete.
     */
    limit?: number
  }

  /**
   * Commerce.galerie
   */
  export type Commerce$galerieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommerceGalerie
     */
    select?: CommerceGalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommerceGalerie
     */
    omit?: CommerceGalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceGalerieInclude<ExtArgs> | null
    where?: CommerceGalerieWhereInput
    orderBy?: CommerceGalerieOrderByWithRelationInput | CommerceGalerieOrderByWithRelationInput[]
    cursor?: CommerceGalerieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommerceGalerieScalarFieldEnum | CommerceGalerieScalarFieldEnum[]
  }

  /**
   * Commerce.sections
   */
  export type Commerce$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommerceSection
     */
    select?: CommerceSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommerceSection
     */
    omit?: CommerceSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceSectionInclude<ExtArgs> | null
    where?: CommerceSectionWhereInput
    orderBy?: CommerceSectionOrderByWithRelationInput | CommerceSectionOrderByWithRelationInput[]
    cursor?: CommerceSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommerceSectionScalarFieldEnum | CommerceSectionScalarFieldEnum[]
  }

  /**
   * Commerce without action
   */
  export type CommerceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commerce
     */
    select?: CommerceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commerce
     */
    omit?: CommerceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceInclude<ExtArgs> | null
  }


  /**
   * Model CommerceSection
   */

  export type AggregateCommerceSection = {
    _count: CommerceSectionCountAggregateOutputType | null
    _avg: CommerceSectionAvgAggregateOutputType | null
    _sum: CommerceSectionSumAggregateOutputType | null
    _min: CommerceSectionMinAggregateOutputType | null
    _max: CommerceSectionMaxAggregateOutputType | null
  }

  export type CommerceSectionAvgAggregateOutputType = {
    id: number | null
    commerceId: number | null
    ordre: number | null
  }

  export type CommerceSectionSumAggregateOutputType = {
    id: number | null
    commerceId: number | null
    ordre: number | null
  }

  export type CommerceSectionMinAggregateOutputType = {
    id: number | null
    commerceId: number | null
    ordre: number | null
    type: $Enums.TypeSection | null
    contenu: string | null
    imageUrl: string | null
    videoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommerceSectionMaxAggregateOutputType = {
    id: number | null
    commerceId: number | null
    ordre: number | null
    type: $Enums.TypeSection | null
    contenu: string | null
    imageUrl: string | null
    videoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommerceSectionCountAggregateOutputType = {
    id: number
    commerceId: number
    ordre: number
    type: number
    contenu: number
    imageUrl: number
    videoUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommerceSectionAvgAggregateInputType = {
    id?: true
    commerceId?: true
    ordre?: true
  }

  export type CommerceSectionSumAggregateInputType = {
    id?: true
    commerceId?: true
    ordre?: true
  }

  export type CommerceSectionMinAggregateInputType = {
    id?: true
    commerceId?: true
    ordre?: true
    type?: true
    contenu?: true
    imageUrl?: true
    videoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommerceSectionMaxAggregateInputType = {
    id?: true
    commerceId?: true
    ordre?: true
    type?: true
    contenu?: true
    imageUrl?: true
    videoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommerceSectionCountAggregateInputType = {
    id?: true
    commerceId?: true
    ordre?: true
    type?: true
    contenu?: true
    imageUrl?: true
    videoUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommerceSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommerceSection to aggregate.
     */
    where?: CommerceSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommerceSections to fetch.
     */
    orderBy?: CommerceSectionOrderByWithRelationInput | CommerceSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommerceSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommerceSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommerceSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommerceSections
    **/
    _count?: true | CommerceSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommerceSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommerceSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommerceSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommerceSectionMaxAggregateInputType
  }

  export type GetCommerceSectionAggregateType<T extends CommerceSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateCommerceSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommerceSection[P]>
      : GetScalarType<T[P], AggregateCommerceSection[P]>
  }




  export type CommerceSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommerceSectionWhereInput
    orderBy?: CommerceSectionOrderByWithAggregationInput | CommerceSectionOrderByWithAggregationInput[]
    by: CommerceSectionScalarFieldEnum[] | CommerceSectionScalarFieldEnum
    having?: CommerceSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommerceSectionCountAggregateInputType | true
    _avg?: CommerceSectionAvgAggregateInputType
    _sum?: CommerceSectionSumAggregateInputType
    _min?: CommerceSectionMinAggregateInputType
    _max?: CommerceSectionMaxAggregateInputType
  }

  export type CommerceSectionGroupByOutputType = {
    id: number
    commerceId: number
    ordre: number
    type: $Enums.TypeSection
    contenu: string
    imageUrl: string | null
    videoUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: CommerceSectionCountAggregateOutputType | null
    _avg: CommerceSectionAvgAggregateOutputType | null
    _sum: CommerceSectionSumAggregateOutputType | null
    _min: CommerceSectionMinAggregateOutputType | null
    _max: CommerceSectionMaxAggregateOutputType | null
  }

  type GetCommerceSectionGroupByPayload<T extends CommerceSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommerceSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommerceSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommerceSectionGroupByOutputType[P]>
            : GetScalarType<T[P], CommerceSectionGroupByOutputType[P]>
        }
      >
    >


  export type CommerceSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commerceId?: boolean
    ordre?: boolean
    type?: boolean
    contenu?: boolean
    imageUrl?: boolean
    videoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    commerce?: boolean | CommerceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commerceSection"]>

  export type CommerceSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commerceId?: boolean
    ordre?: boolean
    type?: boolean
    contenu?: boolean
    imageUrl?: boolean
    videoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    commerce?: boolean | CommerceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commerceSection"]>

  export type CommerceSectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commerceId?: boolean
    ordre?: boolean
    type?: boolean
    contenu?: boolean
    imageUrl?: boolean
    videoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    commerce?: boolean | CommerceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commerceSection"]>

  export type CommerceSectionSelectScalar = {
    id?: boolean
    commerceId?: boolean
    ordre?: boolean
    type?: boolean
    contenu?: boolean
    imageUrl?: boolean
    videoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommerceSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "commerceId" | "ordre" | "type" | "contenu" | "imageUrl" | "videoUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["commerceSection"]>
  export type CommerceSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commerce?: boolean | CommerceDefaultArgs<ExtArgs>
  }
  export type CommerceSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commerce?: boolean | CommerceDefaultArgs<ExtArgs>
  }
  export type CommerceSectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commerce?: boolean | CommerceDefaultArgs<ExtArgs>
  }

  export type $CommerceSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommerceSection"
    objects: {
      commerce: Prisma.$CommercePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      commerceId: number
      ordre: number
      type: $Enums.TypeSection
      contenu: string
      imageUrl: string | null
      videoUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["commerceSection"]>
    composites: {}
  }

  type CommerceSectionGetPayload<S extends boolean | null | undefined | CommerceSectionDefaultArgs> = $Result.GetResult<Prisma.$CommerceSectionPayload, S>

  type CommerceSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommerceSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommerceSectionCountAggregateInputType | true
    }

  export interface CommerceSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommerceSection'], meta: { name: 'CommerceSection' } }
    /**
     * Find zero or one CommerceSection that matches the filter.
     * @param {CommerceSectionFindUniqueArgs} args - Arguments to find a CommerceSection
     * @example
     * // Get one CommerceSection
     * const commerceSection = await prisma.commerceSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommerceSectionFindUniqueArgs>(args: SelectSubset<T, CommerceSectionFindUniqueArgs<ExtArgs>>): Prisma__CommerceSectionClient<$Result.GetResult<Prisma.$CommerceSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommerceSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommerceSectionFindUniqueOrThrowArgs} args - Arguments to find a CommerceSection
     * @example
     * // Get one CommerceSection
     * const commerceSection = await prisma.commerceSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommerceSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, CommerceSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommerceSectionClient<$Result.GetResult<Prisma.$CommerceSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommerceSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommerceSectionFindFirstArgs} args - Arguments to find a CommerceSection
     * @example
     * // Get one CommerceSection
     * const commerceSection = await prisma.commerceSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommerceSectionFindFirstArgs>(args?: SelectSubset<T, CommerceSectionFindFirstArgs<ExtArgs>>): Prisma__CommerceSectionClient<$Result.GetResult<Prisma.$CommerceSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommerceSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommerceSectionFindFirstOrThrowArgs} args - Arguments to find a CommerceSection
     * @example
     * // Get one CommerceSection
     * const commerceSection = await prisma.commerceSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommerceSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, CommerceSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommerceSectionClient<$Result.GetResult<Prisma.$CommerceSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommerceSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommerceSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommerceSections
     * const commerceSections = await prisma.commerceSection.findMany()
     * 
     * // Get first 10 CommerceSections
     * const commerceSections = await prisma.commerceSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commerceSectionWithIdOnly = await prisma.commerceSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommerceSectionFindManyArgs>(args?: SelectSubset<T, CommerceSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommerceSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommerceSection.
     * @param {CommerceSectionCreateArgs} args - Arguments to create a CommerceSection.
     * @example
     * // Create one CommerceSection
     * const CommerceSection = await prisma.commerceSection.create({
     *   data: {
     *     // ... data to create a CommerceSection
     *   }
     * })
     * 
     */
    create<T extends CommerceSectionCreateArgs>(args: SelectSubset<T, CommerceSectionCreateArgs<ExtArgs>>): Prisma__CommerceSectionClient<$Result.GetResult<Prisma.$CommerceSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommerceSections.
     * @param {CommerceSectionCreateManyArgs} args - Arguments to create many CommerceSections.
     * @example
     * // Create many CommerceSections
     * const commerceSection = await prisma.commerceSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommerceSectionCreateManyArgs>(args?: SelectSubset<T, CommerceSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommerceSections and returns the data saved in the database.
     * @param {CommerceSectionCreateManyAndReturnArgs} args - Arguments to create many CommerceSections.
     * @example
     * // Create many CommerceSections
     * const commerceSection = await prisma.commerceSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommerceSections and only return the `id`
     * const commerceSectionWithIdOnly = await prisma.commerceSection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommerceSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, CommerceSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommerceSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommerceSection.
     * @param {CommerceSectionDeleteArgs} args - Arguments to delete one CommerceSection.
     * @example
     * // Delete one CommerceSection
     * const CommerceSection = await prisma.commerceSection.delete({
     *   where: {
     *     // ... filter to delete one CommerceSection
     *   }
     * })
     * 
     */
    delete<T extends CommerceSectionDeleteArgs>(args: SelectSubset<T, CommerceSectionDeleteArgs<ExtArgs>>): Prisma__CommerceSectionClient<$Result.GetResult<Prisma.$CommerceSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommerceSection.
     * @param {CommerceSectionUpdateArgs} args - Arguments to update one CommerceSection.
     * @example
     * // Update one CommerceSection
     * const commerceSection = await prisma.commerceSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommerceSectionUpdateArgs>(args: SelectSubset<T, CommerceSectionUpdateArgs<ExtArgs>>): Prisma__CommerceSectionClient<$Result.GetResult<Prisma.$CommerceSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommerceSections.
     * @param {CommerceSectionDeleteManyArgs} args - Arguments to filter CommerceSections to delete.
     * @example
     * // Delete a few CommerceSections
     * const { count } = await prisma.commerceSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommerceSectionDeleteManyArgs>(args?: SelectSubset<T, CommerceSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommerceSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommerceSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommerceSections
     * const commerceSection = await prisma.commerceSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommerceSectionUpdateManyArgs>(args: SelectSubset<T, CommerceSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommerceSections and returns the data updated in the database.
     * @param {CommerceSectionUpdateManyAndReturnArgs} args - Arguments to update many CommerceSections.
     * @example
     * // Update many CommerceSections
     * const commerceSection = await prisma.commerceSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommerceSections and only return the `id`
     * const commerceSectionWithIdOnly = await prisma.commerceSection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommerceSectionUpdateManyAndReturnArgs>(args: SelectSubset<T, CommerceSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommerceSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommerceSection.
     * @param {CommerceSectionUpsertArgs} args - Arguments to update or create a CommerceSection.
     * @example
     * // Update or create a CommerceSection
     * const commerceSection = await prisma.commerceSection.upsert({
     *   create: {
     *     // ... data to create a CommerceSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommerceSection we want to update
     *   }
     * })
     */
    upsert<T extends CommerceSectionUpsertArgs>(args: SelectSubset<T, CommerceSectionUpsertArgs<ExtArgs>>): Prisma__CommerceSectionClient<$Result.GetResult<Prisma.$CommerceSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommerceSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommerceSectionCountArgs} args - Arguments to filter CommerceSections to count.
     * @example
     * // Count the number of CommerceSections
     * const count = await prisma.commerceSection.count({
     *   where: {
     *     // ... the filter for the CommerceSections we want to count
     *   }
     * })
    **/
    count<T extends CommerceSectionCountArgs>(
      args?: Subset<T, CommerceSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommerceSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommerceSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommerceSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommerceSectionAggregateArgs>(args: Subset<T, CommerceSectionAggregateArgs>): Prisma.PrismaPromise<GetCommerceSectionAggregateType<T>>

    /**
     * Group by CommerceSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommerceSectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommerceSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommerceSectionGroupByArgs['orderBy'] }
        : { orderBy?: CommerceSectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommerceSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommerceSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommerceSection model
   */
  readonly fields: CommerceSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommerceSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommerceSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    commerce<T extends CommerceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommerceDefaultArgs<ExtArgs>>): Prisma__CommerceClient<$Result.GetResult<Prisma.$CommercePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CommerceSection model
   */
  interface CommerceSectionFieldRefs {
    readonly id: FieldRef<"CommerceSection", 'Int'>
    readonly commerceId: FieldRef<"CommerceSection", 'Int'>
    readonly ordre: FieldRef<"CommerceSection", 'Int'>
    readonly type: FieldRef<"CommerceSection", 'TypeSection'>
    readonly contenu: FieldRef<"CommerceSection", 'String'>
    readonly imageUrl: FieldRef<"CommerceSection", 'String'>
    readonly videoUrl: FieldRef<"CommerceSection", 'String'>
    readonly createdAt: FieldRef<"CommerceSection", 'DateTime'>
    readonly updatedAt: FieldRef<"CommerceSection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommerceSection findUnique
   */
  export type CommerceSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommerceSection
     */
    select?: CommerceSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommerceSection
     */
    omit?: CommerceSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceSectionInclude<ExtArgs> | null
    /**
     * Filter, which CommerceSection to fetch.
     */
    where: CommerceSectionWhereUniqueInput
  }

  /**
   * CommerceSection findUniqueOrThrow
   */
  export type CommerceSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommerceSection
     */
    select?: CommerceSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommerceSection
     */
    omit?: CommerceSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceSectionInclude<ExtArgs> | null
    /**
     * Filter, which CommerceSection to fetch.
     */
    where: CommerceSectionWhereUniqueInput
  }

  /**
   * CommerceSection findFirst
   */
  export type CommerceSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommerceSection
     */
    select?: CommerceSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommerceSection
     */
    omit?: CommerceSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceSectionInclude<ExtArgs> | null
    /**
     * Filter, which CommerceSection to fetch.
     */
    where?: CommerceSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommerceSections to fetch.
     */
    orderBy?: CommerceSectionOrderByWithRelationInput | CommerceSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommerceSections.
     */
    cursor?: CommerceSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommerceSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommerceSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommerceSections.
     */
    distinct?: CommerceSectionScalarFieldEnum | CommerceSectionScalarFieldEnum[]
  }

  /**
   * CommerceSection findFirstOrThrow
   */
  export type CommerceSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommerceSection
     */
    select?: CommerceSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommerceSection
     */
    omit?: CommerceSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceSectionInclude<ExtArgs> | null
    /**
     * Filter, which CommerceSection to fetch.
     */
    where?: CommerceSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommerceSections to fetch.
     */
    orderBy?: CommerceSectionOrderByWithRelationInput | CommerceSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommerceSections.
     */
    cursor?: CommerceSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommerceSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommerceSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommerceSections.
     */
    distinct?: CommerceSectionScalarFieldEnum | CommerceSectionScalarFieldEnum[]
  }

  /**
   * CommerceSection findMany
   */
  export type CommerceSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommerceSection
     */
    select?: CommerceSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommerceSection
     */
    omit?: CommerceSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceSectionInclude<ExtArgs> | null
    /**
     * Filter, which CommerceSections to fetch.
     */
    where?: CommerceSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommerceSections to fetch.
     */
    orderBy?: CommerceSectionOrderByWithRelationInput | CommerceSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommerceSections.
     */
    cursor?: CommerceSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommerceSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommerceSections.
     */
    skip?: number
    distinct?: CommerceSectionScalarFieldEnum | CommerceSectionScalarFieldEnum[]
  }

  /**
   * CommerceSection create
   */
  export type CommerceSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommerceSection
     */
    select?: CommerceSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommerceSection
     */
    omit?: CommerceSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a CommerceSection.
     */
    data: XOR<CommerceSectionCreateInput, CommerceSectionUncheckedCreateInput>
  }

  /**
   * CommerceSection createMany
   */
  export type CommerceSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommerceSections.
     */
    data: CommerceSectionCreateManyInput | CommerceSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommerceSection createManyAndReturn
   */
  export type CommerceSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommerceSection
     */
    select?: CommerceSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommerceSection
     */
    omit?: CommerceSectionOmit<ExtArgs> | null
    /**
     * The data used to create many CommerceSections.
     */
    data: CommerceSectionCreateManyInput | CommerceSectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceSectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommerceSection update
   */
  export type CommerceSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommerceSection
     */
    select?: CommerceSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommerceSection
     */
    omit?: CommerceSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a CommerceSection.
     */
    data: XOR<CommerceSectionUpdateInput, CommerceSectionUncheckedUpdateInput>
    /**
     * Choose, which CommerceSection to update.
     */
    where: CommerceSectionWhereUniqueInput
  }

  /**
   * CommerceSection updateMany
   */
  export type CommerceSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommerceSections.
     */
    data: XOR<CommerceSectionUpdateManyMutationInput, CommerceSectionUncheckedUpdateManyInput>
    /**
     * Filter which CommerceSections to update
     */
    where?: CommerceSectionWhereInput
    /**
     * Limit how many CommerceSections to update.
     */
    limit?: number
  }

  /**
   * CommerceSection updateManyAndReturn
   */
  export type CommerceSectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommerceSection
     */
    select?: CommerceSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommerceSection
     */
    omit?: CommerceSectionOmit<ExtArgs> | null
    /**
     * The data used to update CommerceSections.
     */
    data: XOR<CommerceSectionUpdateManyMutationInput, CommerceSectionUncheckedUpdateManyInput>
    /**
     * Filter which CommerceSections to update
     */
    where?: CommerceSectionWhereInput
    /**
     * Limit how many CommerceSections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceSectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommerceSection upsert
   */
  export type CommerceSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommerceSection
     */
    select?: CommerceSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommerceSection
     */
    omit?: CommerceSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the CommerceSection to update in case it exists.
     */
    where: CommerceSectionWhereUniqueInput
    /**
     * In case the CommerceSection found by the `where` argument doesn't exist, create a new CommerceSection with this data.
     */
    create: XOR<CommerceSectionCreateInput, CommerceSectionUncheckedCreateInput>
    /**
     * In case the CommerceSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommerceSectionUpdateInput, CommerceSectionUncheckedUpdateInput>
  }

  /**
   * CommerceSection delete
   */
  export type CommerceSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommerceSection
     */
    select?: CommerceSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommerceSection
     */
    omit?: CommerceSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceSectionInclude<ExtArgs> | null
    /**
     * Filter which CommerceSection to delete.
     */
    where: CommerceSectionWhereUniqueInput
  }

  /**
   * CommerceSection deleteMany
   */
  export type CommerceSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommerceSections to delete
     */
    where?: CommerceSectionWhereInput
    /**
     * Limit how many CommerceSections to delete.
     */
    limit?: number
  }

  /**
   * CommerceSection without action
   */
  export type CommerceSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommerceSection
     */
    select?: CommerceSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommerceSection
     */
    omit?: CommerceSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceSectionInclude<ExtArgs> | null
  }


  /**
   * Model CommerceGalerie
   */

  export type AggregateCommerceGalerie = {
    _count: CommerceGalerieCountAggregateOutputType | null
    _avg: CommerceGalerieAvgAggregateOutputType | null
    _sum: CommerceGalerieSumAggregateOutputType | null
    _min: CommerceGalerieMinAggregateOutputType | null
    _max: CommerceGalerieMaxAggregateOutputType | null
  }

  export type CommerceGalerieAvgAggregateOutputType = {
    id: number | null
    commerceId: number | null
  }

  export type CommerceGalerieSumAggregateOutputType = {
    id: number | null
    commerceId: number | null
  }

  export type CommerceGalerieMinAggregateOutputType = {
    id: number | null
    imageUrl: string | null
    description: string | null
    commerceId: number | null
    createdAt: Date | null
  }

  export type CommerceGalerieMaxAggregateOutputType = {
    id: number | null
    imageUrl: string | null
    description: string | null
    commerceId: number | null
    createdAt: Date | null
  }

  export type CommerceGalerieCountAggregateOutputType = {
    id: number
    imageUrl: number
    description: number
    commerceId: number
    createdAt: number
    _all: number
  }


  export type CommerceGalerieAvgAggregateInputType = {
    id?: true
    commerceId?: true
  }

  export type CommerceGalerieSumAggregateInputType = {
    id?: true
    commerceId?: true
  }

  export type CommerceGalerieMinAggregateInputType = {
    id?: true
    imageUrl?: true
    description?: true
    commerceId?: true
    createdAt?: true
  }

  export type CommerceGalerieMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    description?: true
    commerceId?: true
    createdAt?: true
  }

  export type CommerceGalerieCountAggregateInputType = {
    id?: true
    imageUrl?: true
    description?: true
    commerceId?: true
    createdAt?: true
    _all?: true
  }

  export type CommerceGalerieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommerceGalerie to aggregate.
     */
    where?: CommerceGalerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommerceGaleries to fetch.
     */
    orderBy?: CommerceGalerieOrderByWithRelationInput | CommerceGalerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommerceGalerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommerceGaleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommerceGaleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommerceGaleries
    **/
    _count?: true | CommerceGalerieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommerceGalerieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommerceGalerieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommerceGalerieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommerceGalerieMaxAggregateInputType
  }

  export type GetCommerceGalerieAggregateType<T extends CommerceGalerieAggregateArgs> = {
        [P in keyof T & keyof AggregateCommerceGalerie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommerceGalerie[P]>
      : GetScalarType<T[P], AggregateCommerceGalerie[P]>
  }




  export type CommerceGalerieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommerceGalerieWhereInput
    orderBy?: CommerceGalerieOrderByWithAggregationInput | CommerceGalerieOrderByWithAggregationInput[]
    by: CommerceGalerieScalarFieldEnum[] | CommerceGalerieScalarFieldEnum
    having?: CommerceGalerieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommerceGalerieCountAggregateInputType | true
    _avg?: CommerceGalerieAvgAggregateInputType
    _sum?: CommerceGalerieSumAggregateInputType
    _min?: CommerceGalerieMinAggregateInputType
    _max?: CommerceGalerieMaxAggregateInputType
  }

  export type CommerceGalerieGroupByOutputType = {
    id: number
    imageUrl: string
    description: string | null
    commerceId: number
    createdAt: Date
    _count: CommerceGalerieCountAggregateOutputType | null
    _avg: CommerceGalerieAvgAggregateOutputType | null
    _sum: CommerceGalerieSumAggregateOutputType | null
    _min: CommerceGalerieMinAggregateOutputType | null
    _max: CommerceGalerieMaxAggregateOutputType | null
  }

  type GetCommerceGalerieGroupByPayload<T extends CommerceGalerieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommerceGalerieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommerceGalerieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommerceGalerieGroupByOutputType[P]>
            : GetScalarType<T[P], CommerceGalerieGroupByOutputType[P]>
        }
      >
    >


  export type CommerceGalerieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    description?: boolean
    commerceId?: boolean
    createdAt?: boolean
    commerce?: boolean | CommerceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commerceGalerie"]>

  export type CommerceGalerieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    description?: boolean
    commerceId?: boolean
    createdAt?: boolean
    commerce?: boolean | CommerceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commerceGalerie"]>

  export type CommerceGalerieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    description?: boolean
    commerceId?: boolean
    createdAt?: boolean
    commerce?: boolean | CommerceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commerceGalerie"]>

  export type CommerceGalerieSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    description?: boolean
    commerceId?: boolean
    createdAt?: boolean
  }

  export type CommerceGalerieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "description" | "commerceId" | "createdAt", ExtArgs["result"]["commerceGalerie"]>
  export type CommerceGalerieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commerce?: boolean | CommerceDefaultArgs<ExtArgs>
  }
  export type CommerceGalerieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commerce?: boolean | CommerceDefaultArgs<ExtArgs>
  }
  export type CommerceGalerieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commerce?: boolean | CommerceDefaultArgs<ExtArgs>
  }

  export type $CommerceGaleriePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommerceGalerie"
    objects: {
      commerce: Prisma.$CommercePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      imageUrl: string
      description: string | null
      commerceId: number
      createdAt: Date
    }, ExtArgs["result"]["commerceGalerie"]>
    composites: {}
  }

  type CommerceGalerieGetPayload<S extends boolean | null | undefined | CommerceGalerieDefaultArgs> = $Result.GetResult<Prisma.$CommerceGaleriePayload, S>

  type CommerceGalerieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommerceGalerieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommerceGalerieCountAggregateInputType | true
    }

  export interface CommerceGalerieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommerceGalerie'], meta: { name: 'CommerceGalerie' } }
    /**
     * Find zero or one CommerceGalerie that matches the filter.
     * @param {CommerceGalerieFindUniqueArgs} args - Arguments to find a CommerceGalerie
     * @example
     * // Get one CommerceGalerie
     * const commerceGalerie = await prisma.commerceGalerie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommerceGalerieFindUniqueArgs>(args: SelectSubset<T, CommerceGalerieFindUniqueArgs<ExtArgs>>): Prisma__CommerceGalerieClient<$Result.GetResult<Prisma.$CommerceGaleriePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommerceGalerie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommerceGalerieFindUniqueOrThrowArgs} args - Arguments to find a CommerceGalerie
     * @example
     * // Get one CommerceGalerie
     * const commerceGalerie = await prisma.commerceGalerie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommerceGalerieFindUniqueOrThrowArgs>(args: SelectSubset<T, CommerceGalerieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommerceGalerieClient<$Result.GetResult<Prisma.$CommerceGaleriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommerceGalerie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommerceGalerieFindFirstArgs} args - Arguments to find a CommerceGalerie
     * @example
     * // Get one CommerceGalerie
     * const commerceGalerie = await prisma.commerceGalerie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommerceGalerieFindFirstArgs>(args?: SelectSubset<T, CommerceGalerieFindFirstArgs<ExtArgs>>): Prisma__CommerceGalerieClient<$Result.GetResult<Prisma.$CommerceGaleriePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommerceGalerie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommerceGalerieFindFirstOrThrowArgs} args - Arguments to find a CommerceGalerie
     * @example
     * // Get one CommerceGalerie
     * const commerceGalerie = await prisma.commerceGalerie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommerceGalerieFindFirstOrThrowArgs>(args?: SelectSubset<T, CommerceGalerieFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommerceGalerieClient<$Result.GetResult<Prisma.$CommerceGaleriePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommerceGaleries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommerceGalerieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommerceGaleries
     * const commerceGaleries = await prisma.commerceGalerie.findMany()
     * 
     * // Get first 10 CommerceGaleries
     * const commerceGaleries = await prisma.commerceGalerie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commerceGalerieWithIdOnly = await prisma.commerceGalerie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommerceGalerieFindManyArgs>(args?: SelectSubset<T, CommerceGalerieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommerceGaleriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommerceGalerie.
     * @param {CommerceGalerieCreateArgs} args - Arguments to create a CommerceGalerie.
     * @example
     * // Create one CommerceGalerie
     * const CommerceGalerie = await prisma.commerceGalerie.create({
     *   data: {
     *     // ... data to create a CommerceGalerie
     *   }
     * })
     * 
     */
    create<T extends CommerceGalerieCreateArgs>(args: SelectSubset<T, CommerceGalerieCreateArgs<ExtArgs>>): Prisma__CommerceGalerieClient<$Result.GetResult<Prisma.$CommerceGaleriePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommerceGaleries.
     * @param {CommerceGalerieCreateManyArgs} args - Arguments to create many CommerceGaleries.
     * @example
     * // Create many CommerceGaleries
     * const commerceGalerie = await prisma.commerceGalerie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommerceGalerieCreateManyArgs>(args?: SelectSubset<T, CommerceGalerieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommerceGaleries and returns the data saved in the database.
     * @param {CommerceGalerieCreateManyAndReturnArgs} args - Arguments to create many CommerceGaleries.
     * @example
     * // Create many CommerceGaleries
     * const commerceGalerie = await prisma.commerceGalerie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommerceGaleries and only return the `id`
     * const commerceGalerieWithIdOnly = await prisma.commerceGalerie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommerceGalerieCreateManyAndReturnArgs>(args?: SelectSubset<T, CommerceGalerieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommerceGaleriePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommerceGalerie.
     * @param {CommerceGalerieDeleteArgs} args - Arguments to delete one CommerceGalerie.
     * @example
     * // Delete one CommerceGalerie
     * const CommerceGalerie = await prisma.commerceGalerie.delete({
     *   where: {
     *     // ... filter to delete one CommerceGalerie
     *   }
     * })
     * 
     */
    delete<T extends CommerceGalerieDeleteArgs>(args: SelectSubset<T, CommerceGalerieDeleteArgs<ExtArgs>>): Prisma__CommerceGalerieClient<$Result.GetResult<Prisma.$CommerceGaleriePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommerceGalerie.
     * @param {CommerceGalerieUpdateArgs} args - Arguments to update one CommerceGalerie.
     * @example
     * // Update one CommerceGalerie
     * const commerceGalerie = await prisma.commerceGalerie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommerceGalerieUpdateArgs>(args: SelectSubset<T, CommerceGalerieUpdateArgs<ExtArgs>>): Prisma__CommerceGalerieClient<$Result.GetResult<Prisma.$CommerceGaleriePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommerceGaleries.
     * @param {CommerceGalerieDeleteManyArgs} args - Arguments to filter CommerceGaleries to delete.
     * @example
     * // Delete a few CommerceGaleries
     * const { count } = await prisma.commerceGalerie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommerceGalerieDeleteManyArgs>(args?: SelectSubset<T, CommerceGalerieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommerceGaleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommerceGalerieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommerceGaleries
     * const commerceGalerie = await prisma.commerceGalerie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommerceGalerieUpdateManyArgs>(args: SelectSubset<T, CommerceGalerieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommerceGaleries and returns the data updated in the database.
     * @param {CommerceGalerieUpdateManyAndReturnArgs} args - Arguments to update many CommerceGaleries.
     * @example
     * // Update many CommerceGaleries
     * const commerceGalerie = await prisma.commerceGalerie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommerceGaleries and only return the `id`
     * const commerceGalerieWithIdOnly = await prisma.commerceGalerie.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommerceGalerieUpdateManyAndReturnArgs>(args: SelectSubset<T, CommerceGalerieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommerceGaleriePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommerceGalerie.
     * @param {CommerceGalerieUpsertArgs} args - Arguments to update or create a CommerceGalerie.
     * @example
     * // Update or create a CommerceGalerie
     * const commerceGalerie = await prisma.commerceGalerie.upsert({
     *   create: {
     *     // ... data to create a CommerceGalerie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommerceGalerie we want to update
     *   }
     * })
     */
    upsert<T extends CommerceGalerieUpsertArgs>(args: SelectSubset<T, CommerceGalerieUpsertArgs<ExtArgs>>): Prisma__CommerceGalerieClient<$Result.GetResult<Prisma.$CommerceGaleriePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommerceGaleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommerceGalerieCountArgs} args - Arguments to filter CommerceGaleries to count.
     * @example
     * // Count the number of CommerceGaleries
     * const count = await prisma.commerceGalerie.count({
     *   where: {
     *     // ... the filter for the CommerceGaleries we want to count
     *   }
     * })
    **/
    count<T extends CommerceGalerieCountArgs>(
      args?: Subset<T, CommerceGalerieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommerceGalerieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommerceGalerie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommerceGalerieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommerceGalerieAggregateArgs>(args: Subset<T, CommerceGalerieAggregateArgs>): Prisma.PrismaPromise<GetCommerceGalerieAggregateType<T>>

    /**
     * Group by CommerceGalerie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommerceGalerieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommerceGalerieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommerceGalerieGroupByArgs['orderBy'] }
        : { orderBy?: CommerceGalerieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommerceGalerieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommerceGalerieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommerceGalerie model
   */
  readonly fields: CommerceGalerieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommerceGalerie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommerceGalerieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    commerce<T extends CommerceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommerceDefaultArgs<ExtArgs>>): Prisma__CommerceClient<$Result.GetResult<Prisma.$CommercePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CommerceGalerie model
   */
  interface CommerceGalerieFieldRefs {
    readonly id: FieldRef<"CommerceGalerie", 'Int'>
    readonly imageUrl: FieldRef<"CommerceGalerie", 'String'>
    readonly description: FieldRef<"CommerceGalerie", 'String'>
    readonly commerceId: FieldRef<"CommerceGalerie", 'Int'>
    readonly createdAt: FieldRef<"CommerceGalerie", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommerceGalerie findUnique
   */
  export type CommerceGalerieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommerceGalerie
     */
    select?: CommerceGalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommerceGalerie
     */
    omit?: CommerceGalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceGalerieInclude<ExtArgs> | null
    /**
     * Filter, which CommerceGalerie to fetch.
     */
    where: CommerceGalerieWhereUniqueInput
  }

  /**
   * CommerceGalerie findUniqueOrThrow
   */
  export type CommerceGalerieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommerceGalerie
     */
    select?: CommerceGalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommerceGalerie
     */
    omit?: CommerceGalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceGalerieInclude<ExtArgs> | null
    /**
     * Filter, which CommerceGalerie to fetch.
     */
    where: CommerceGalerieWhereUniqueInput
  }

  /**
   * CommerceGalerie findFirst
   */
  export type CommerceGalerieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommerceGalerie
     */
    select?: CommerceGalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommerceGalerie
     */
    omit?: CommerceGalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceGalerieInclude<ExtArgs> | null
    /**
     * Filter, which CommerceGalerie to fetch.
     */
    where?: CommerceGalerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommerceGaleries to fetch.
     */
    orderBy?: CommerceGalerieOrderByWithRelationInput | CommerceGalerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommerceGaleries.
     */
    cursor?: CommerceGalerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommerceGaleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommerceGaleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommerceGaleries.
     */
    distinct?: CommerceGalerieScalarFieldEnum | CommerceGalerieScalarFieldEnum[]
  }

  /**
   * CommerceGalerie findFirstOrThrow
   */
  export type CommerceGalerieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommerceGalerie
     */
    select?: CommerceGalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommerceGalerie
     */
    omit?: CommerceGalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceGalerieInclude<ExtArgs> | null
    /**
     * Filter, which CommerceGalerie to fetch.
     */
    where?: CommerceGalerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommerceGaleries to fetch.
     */
    orderBy?: CommerceGalerieOrderByWithRelationInput | CommerceGalerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommerceGaleries.
     */
    cursor?: CommerceGalerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommerceGaleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommerceGaleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommerceGaleries.
     */
    distinct?: CommerceGalerieScalarFieldEnum | CommerceGalerieScalarFieldEnum[]
  }

  /**
   * CommerceGalerie findMany
   */
  export type CommerceGalerieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommerceGalerie
     */
    select?: CommerceGalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommerceGalerie
     */
    omit?: CommerceGalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceGalerieInclude<ExtArgs> | null
    /**
     * Filter, which CommerceGaleries to fetch.
     */
    where?: CommerceGalerieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommerceGaleries to fetch.
     */
    orderBy?: CommerceGalerieOrderByWithRelationInput | CommerceGalerieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommerceGaleries.
     */
    cursor?: CommerceGalerieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommerceGaleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommerceGaleries.
     */
    skip?: number
    distinct?: CommerceGalerieScalarFieldEnum | CommerceGalerieScalarFieldEnum[]
  }

  /**
   * CommerceGalerie create
   */
  export type CommerceGalerieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommerceGalerie
     */
    select?: CommerceGalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommerceGalerie
     */
    omit?: CommerceGalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceGalerieInclude<ExtArgs> | null
    /**
     * The data needed to create a CommerceGalerie.
     */
    data: XOR<CommerceGalerieCreateInput, CommerceGalerieUncheckedCreateInput>
  }

  /**
   * CommerceGalerie createMany
   */
  export type CommerceGalerieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommerceGaleries.
     */
    data: CommerceGalerieCreateManyInput | CommerceGalerieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommerceGalerie createManyAndReturn
   */
  export type CommerceGalerieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommerceGalerie
     */
    select?: CommerceGalerieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommerceGalerie
     */
    omit?: CommerceGalerieOmit<ExtArgs> | null
    /**
     * The data used to create many CommerceGaleries.
     */
    data: CommerceGalerieCreateManyInput | CommerceGalerieCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceGalerieIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommerceGalerie update
   */
  export type CommerceGalerieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommerceGalerie
     */
    select?: CommerceGalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommerceGalerie
     */
    omit?: CommerceGalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceGalerieInclude<ExtArgs> | null
    /**
     * The data needed to update a CommerceGalerie.
     */
    data: XOR<CommerceGalerieUpdateInput, CommerceGalerieUncheckedUpdateInput>
    /**
     * Choose, which CommerceGalerie to update.
     */
    where: CommerceGalerieWhereUniqueInput
  }

  /**
   * CommerceGalerie updateMany
   */
  export type CommerceGalerieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommerceGaleries.
     */
    data: XOR<CommerceGalerieUpdateManyMutationInput, CommerceGalerieUncheckedUpdateManyInput>
    /**
     * Filter which CommerceGaleries to update
     */
    where?: CommerceGalerieWhereInput
    /**
     * Limit how many CommerceGaleries to update.
     */
    limit?: number
  }

  /**
   * CommerceGalerie updateManyAndReturn
   */
  export type CommerceGalerieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommerceGalerie
     */
    select?: CommerceGalerieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommerceGalerie
     */
    omit?: CommerceGalerieOmit<ExtArgs> | null
    /**
     * The data used to update CommerceGaleries.
     */
    data: XOR<CommerceGalerieUpdateManyMutationInput, CommerceGalerieUncheckedUpdateManyInput>
    /**
     * Filter which CommerceGaleries to update
     */
    where?: CommerceGalerieWhereInput
    /**
     * Limit how many CommerceGaleries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceGalerieIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommerceGalerie upsert
   */
  export type CommerceGalerieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommerceGalerie
     */
    select?: CommerceGalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommerceGalerie
     */
    omit?: CommerceGalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceGalerieInclude<ExtArgs> | null
    /**
     * The filter to search for the CommerceGalerie to update in case it exists.
     */
    where: CommerceGalerieWhereUniqueInput
    /**
     * In case the CommerceGalerie found by the `where` argument doesn't exist, create a new CommerceGalerie with this data.
     */
    create: XOR<CommerceGalerieCreateInput, CommerceGalerieUncheckedCreateInput>
    /**
     * In case the CommerceGalerie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommerceGalerieUpdateInput, CommerceGalerieUncheckedUpdateInput>
  }

  /**
   * CommerceGalerie delete
   */
  export type CommerceGalerieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommerceGalerie
     */
    select?: CommerceGalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommerceGalerie
     */
    omit?: CommerceGalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceGalerieInclude<ExtArgs> | null
    /**
     * Filter which CommerceGalerie to delete.
     */
    where: CommerceGalerieWhereUniqueInput
  }

  /**
   * CommerceGalerie deleteMany
   */
  export type CommerceGalerieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommerceGaleries to delete
     */
    where?: CommerceGalerieWhereInput
    /**
     * Limit how many CommerceGaleries to delete.
     */
    limit?: number
  }

  /**
   * CommerceGalerie without action
   */
  export type CommerceGalerieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommerceGalerie
     */
    select?: CommerceGalerieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommerceGalerie
     */
    omit?: CommerceGalerieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommerceGalerieInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    role: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategorieAnnonceScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    description: 'description'
  };

  export type CategorieAnnonceScalarFieldEnum = (typeof CategorieAnnonceScalarFieldEnum)[keyof typeof CategorieAnnonceScalarFieldEnum]


  export const AnnoncesScalarFieldEnum: {
    id: 'id',
    titre: 'titre',
    description: 'description',
    imageUrl: 'imageUrl',
    new: 'new',
    datecreation: 'datecreation',
    categorieId: 'categorieId'
  };

  export type AnnoncesScalarFieldEnum = (typeof AnnoncesScalarFieldEnum)[keyof typeof AnnoncesScalarFieldEnum]


  export const GalerieScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    description: 'description',
    annonceId: 'annonceId',
    createdAt: 'createdAt'
  };

  export type GalerieScalarFieldEnum = (typeof GalerieScalarFieldEnum)[keyof typeof GalerieScalarFieldEnum]


  export const AnnonceSectionScalarFieldEnum: {
    id: 'id',
    annonceId: 'annonceId',
    ordre: 'ordre',
    type: 'type',
    contenu: 'contenu',
    imageUrl: 'imageUrl',
    videoUrl: 'videoUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnnonceSectionScalarFieldEnum = (typeof AnnonceSectionScalarFieldEnum)[keyof typeof AnnonceSectionScalarFieldEnum]


  export const HoraireScalarFieldEnum: {
    id: 'id',
    jour: 'jour',
    ouverture: 'ouverture',
    fermeture: 'fermeture',
    status: 'status',
    typecommerce: 'typecommerce'
  };

  export type HoraireScalarFieldEnum = (typeof HoraireScalarFieldEnum)[keyof typeof HoraireScalarFieldEnum]


  export const HistoireScalarFieldEnum: {
    id: 'id',
    titre: 'titre',
    annee: 'annee',
    description: 'description',
    imageUrl: 'imageUrl'
  };

  export type HistoireScalarFieldEnum = (typeof HistoireScalarFieldEnum)[keyof typeof HistoireScalarFieldEnum]


  export const CommerceScalarFieldEnum: {
    id: 'id',
    titre: 'titre',
    description: 'description',
    imageUrl: 'imageUrl',
    type: 'type',
    datecreation: 'datecreation',
    telephone: 'telephone'
  };

  export type CommerceScalarFieldEnum = (typeof CommerceScalarFieldEnum)[keyof typeof CommerceScalarFieldEnum]


  export const CommerceSectionScalarFieldEnum: {
    id: 'id',
    commerceId: 'commerceId',
    ordre: 'ordre',
    type: 'type',
    contenu: 'contenu',
    imageUrl: 'imageUrl',
    videoUrl: 'videoUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommerceSectionScalarFieldEnum = (typeof CommerceSectionScalarFieldEnum)[keyof typeof CommerceSectionScalarFieldEnum]


  export const CommerceGalerieScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    description: 'description',
    commerceId: 'commerceId',
    createdAt: 'createdAt'
  };

  export type CommerceGalerieScalarFieldEnum = (typeof CommerceGalerieScalarFieldEnum)[keyof typeof CommerceGalerieScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TypeSection'
   */
  export type EnumTypeSectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeSection'>
    


  /**
   * Reference to a field of type 'TypeSection[]'
   */
  export type ListEnumTypeSectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeSection[]'>
    


  /**
   * Reference to a field of type 'TypeCommerce'
   */
  export type EnumTypeCommerceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeCommerce'>
    


  /**
   * Reference to a field of type 'TypeCommerce[]'
   */
  export type ListEnumTypeCommerceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeCommerce[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CategorieAnnonceWhereInput = {
    AND?: CategorieAnnonceWhereInput | CategorieAnnonceWhereInput[]
    OR?: CategorieAnnonceWhereInput[]
    NOT?: CategorieAnnonceWhereInput | CategorieAnnonceWhereInput[]
    id?: IntFilter<"CategorieAnnonce"> | number
    nom?: StringFilter<"CategorieAnnonce"> | string
    description?: StringNullableFilter<"CategorieAnnonce"> | string | null
    annonces?: AnnoncesListRelationFilter
  }

  export type CategorieAnnonceOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    annonces?: AnnoncesOrderByRelationAggregateInput
  }

  export type CategorieAnnonceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nom?: string
    AND?: CategorieAnnonceWhereInput | CategorieAnnonceWhereInput[]
    OR?: CategorieAnnonceWhereInput[]
    NOT?: CategorieAnnonceWhereInput | CategorieAnnonceWhereInput[]
    description?: StringNullableFilter<"CategorieAnnonce"> | string | null
    annonces?: AnnoncesListRelationFilter
  }, "id" | "nom">

  export type CategorieAnnonceOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: CategorieAnnonceCountOrderByAggregateInput
    _avg?: CategorieAnnonceAvgOrderByAggregateInput
    _max?: CategorieAnnonceMaxOrderByAggregateInput
    _min?: CategorieAnnonceMinOrderByAggregateInput
    _sum?: CategorieAnnonceSumOrderByAggregateInput
  }

  export type CategorieAnnonceScalarWhereWithAggregatesInput = {
    AND?: CategorieAnnonceScalarWhereWithAggregatesInput | CategorieAnnonceScalarWhereWithAggregatesInput[]
    OR?: CategorieAnnonceScalarWhereWithAggregatesInput[]
    NOT?: CategorieAnnonceScalarWhereWithAggregatesInput | CategorieAnnonceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CategorieAnnonce"> | number
    nom?: StringWithAggregatesFilter<"CategorieAnnonce"> | string
    description?: StringNullableWithAggregatesFilter<"CategorieAnnonce"> | string | null
  }

  export type AnnoncesWhereInput = {
    AND?: AnnoncesWhereInput | AnnoncesWhereInput[]
    OR?: AnnoncesWhereInput[]
    NOT?: AnnoncesWhereInput | AnnoncesWhereInput[]
    id?: IntFilter<"Annonces"> | number
    titre?: StringFilter<"Annonces"> | string
    description?: StringFilter<"Annonces"> | string
    imageUrl?: StringFilter<"Annonces"> | string
    new?: BoolFilter<"Annonces"> | boolean
    datecreation?: DateTimeFilter<"Annonces"> | Date | string
    categorieId?: IntNullableFilter<"Annonces"> | number | null
    sections?: AnnonceSectionListRelationFilter
    categorie?: XOR<CategorieAnnonceNullableScalarRelationFilter, CategorieAnnonceWhereInput> | null
    galerie?: GalerieListRelationFilter
  }

  export type AnnoncesOrderByWithRelationInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    new?: SortOrder
    datecreation?: SortOrder
    categorieId?: SortOrderInput | SortOrder
    sections?: AnnonceSectionOrderByRelationAggregateInput
    categorie?: CategorieAnnonceOrderByWithRelationInput
    galerie?: GalerieOrderByRelationAggregateInput
  }

  export type AnnoncesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnnoncesWhereInput | AnnoncesWhereInput[]
    OR?: AnnoncesWhereInput[]
    NOT?: AnnoncesWhereInput | AnnoncesWhereInput[]
    titre?: StringFilter<"Annonces"> | string
    description?: StringFilter<"Annonces"> | string
    imageUrl?: StringFilter<"Annonces"> | string
    new?: BoolFilter<"Annonces"> | boolean
    datecreation?: DateTimeFilter<"Annonces"> | Date | string
    categorieId?: IntNullableFilter<"Annonces"> | number | null
    sections?: AnnonceSectionListRelationFilter
    categorie?: XOR<CategorieAnnonceNullableScalarRelationFilter, CategorieAnnonceWhereInput> | null
    galerie?: GalerieListRelationFilter
  }, "id">

  export type AnnoncesOrderByWithAggregationInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    new?: SortOrder
    datecreation?: SortOrder
    categorieId?: SortOrderInput | SortOrder
    _count?: AnnoncesCountOrderByAggregateInput
    _avg?: AnnoncesAvgOrderByAggregateInput
    _max?: AnnoncesMaxOrderByAggregateInput
    _min?: AnnoncesMinOrderByAggregateInput
    _sum?: AnnoncesSumOrderByAggregateInput
  }

  export type AnnoncesScalarWhereWithAggregatesInput = {
    AND?: AnnoncesScalarWhereWithAggregatesInput | AnnoncesScalarWhereWithAggregatesInput[]
    OR?: AnnoncesScalarWhereWithAggregatesInput[]
    NOT?: AnnoncesScalarWhereWithAggregatesInput | AnnoncesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Annonces"> | number
    titre?: StringWithAggregatesFilter<"Annonces"> | string
    description?: StringWithAggregatesFilter<"Annonces"> | string
    imageUrl?: StringWithAggregatesFilter<"Annonces"> | string
    new?: BoolWithAggregatesFilter<"Annonces"> | boolean
    datecreation?: DateTimeWithAggregatesFilter<"Annonces"> | Date | string
    categorieId?: IntNullableWithAggregatesFilter<"Annonces"> | number | null
  }

  export type GalerieWhereInput = {
    AND?: GalerieWhereInput | GalerieWhereInput[]
    OR?: GalerieWhereInput[]
    NOT?: GalerieWhereInput | GalerieWhereInput[]
    id?: IntFilter<"Galerie"> | number
    imageUrl?: StringFilter<"Galerie"> | string
    description?: StringNullableFilter<"Galerie"> | string | null
    annonceId?: IntFilter<"Galerie"> | number
    createdAt?: DateTimeFilter<"Galerie"> | Date | string
    annonce?: XOR<AnnoncesScalarRelationFilter, AnnoncesWhereInput>
  }

  export type GalerieOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrderInput | SortOrder
    annonceId?: SortOrder
    createdAt?: SortOrder
    annonce?: AnnoncesOrderByWithRelationInput
  }

  export type GalerieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GalerieWhereInput | GalerieWhereInput[]
    OR?: GalerieWhereInput[]
    NOT?: GalerieWhereInput | GalerieWhereInput[]
    imageUrl?: StringFilter<"Galerie"> | string
    description?: StringNullableFilter<"Galerie"> | string | null
    annonceId?: IntFilter<"Galerie"> | number
    createdAt?: DateTimeFilter<"Galerie"> | Date | string
    annonce?: XOR<AnnoncesScalarRelationFilter, AnnoncesWhereInput>
  }, "id">

  export type GalerieOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrderInput | SortOrder
    annonceId?: SortOrder
    createdAt?: SortOrder
    _count?: GalerieCountOrderByAggregateInput
    _avg?: GalerieAvgOrderByAggregateInput
    _max?: GalerieMaxOrderByAggregateInput
    _min?: GalerieMinOrderByAggregateInput
    _sum?: GalerieSumOrderByAggregateInput
  }

  export type GalerieScalarWhereWithAggregatesInput = {
    AND?: GalerieScalarWhereWithAggregatesInput | GalerieScalarWhereWithAggregatesInput[]
    OR?: GalerieScalarWhereWithAggregatesInput[]
    NOT?: GalerieScalarWhereWithAggregatesInput | GalerieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Galerie"> | number
    imageUrl?: StringWithAggregatesFilter<"Galerie"> | string
    description?: StringNullableWithAggregatesFilter<"Galerie"> | string | null
    annonceId?: IntWithAggregatesFilter<"Galerie"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Galerie"> | Date | string
  }

  export type AnnonceSectionWhereInput = {
    AND?: AnnonceSectionWhereInput | AnnonceSectionWhereInput[]
    OR?: AnnonceSectionWhereInput[]
    NOT?: AnnonceSectionWhereInput | AnnonceSectionWhereInput[]
    id?: IntFilter<"AnnonceSection"> | number
    annonceId?: IntFilter<"AnnonceSection"> | number
    ordre?: IntFilter<"AnnonceSection"> | number
    type?: EnumTypeSectionFilter<"AnnonceSection"> | $Enums.TypeSection
    contenu?: StringFilter<"AnnonceSection"> | string
    imageUrl?: StringNullableFilter<"AnnonceSection"> | string | null
    videoUrl?: StringNullableFilter<"AnnonceSection"> | string | null
    createdAt?: DateTimeFilter<"AnnonceSection"> | Date | string
    updatedAt?: DateTimeFilter<"AnnonceSection"> | Date | string
    annonce?: XOR<AnnoncesScalarRelationFilter, AnnoncesWhereInput>
  }

  export type AnnonceSectionOrderByWithRelationInput = {
    id?: SortOrder
    annonceId?: SortOrder
    ordre?: SortOrder
    type?: SortOrder
    contenu?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    videoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    annonce?: AnnoncesOrderByWithRelationInput
  }

  export type AnnonceSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnnonceSectionWhereInput | AnnonceSectionWhereInput[]
    OR?: AnnonceSectionWhereInput[]
    NOT?: AnnonceSectionWhereInput | AnnonceSectionWhereInput[]
    annonceId?: IntFilter<"AnnonceSection"> | number
    ordre?: IntFilter<"AnnonceSection"> | number
    type?: EnumTypeSectionFilter<"AnnonceSection"> | $Enums.TypeSection
    contenu?: StringFilter<"AnnonceSection"> | string
    imageUrl?: StringNullableFilter<"AnnonceSection"> | string | null
    videoUrl?: StringNullableFilter<"AnnonceSection"> | string | null
    createdAt?: DateTimeFilter<"AnnonceSection"> | Date | string
    updatedAt?: DateTimeFilter<"AnnonceSection"> | Date | string
    annonce?: XOR<AnnoncesScalarRelationFilter, AnnoncesWhereInput>
  }, "id">

  export type AnnonceSectionOrderByWithAggregationInput = {
    id?: SortOrder
    annonceId?: SortOrder
    ordre?: SortOrder
    type?: SortOrder
    contenu?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    videoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnnonceSectionCountOrderByAggregateInput
    _avg?: AnnonceSectionAvgOrderByAggregateInput
    _max?: AnnonceSectionMaxOrderByAggregateInput
    _min?: AnnonceSectionMinOrderByAggregateInput
    _sum?: AnnonceSectionSumOrderByAggregateInput
  }

  export type AnnonceSectionScalarWhereWithAggregatesInput = {
    AND?: AnnonceSectionScalarWhereWithAggregatesInput | AnnonceSectionScalarWhereWithAggregatesInput[]
    OR?: AnnonceSectionScalarWhereWithAggregatesInput[]
    NOT?: AnnonceSectionScalarWhereWithAggregatesInput | AnnonceSectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AnnonceSection"> | number
    annonceId?: IntWithAggregatesFilter<"AnnonceSection"> | number
    ordre?: IntWithAggregatesFilter<"AnnonceSection"> | number
    type?: EnumTypeSectionWithAggregatesFilter<"AnnonceSection"> | $Enums.TypeSection
    contenu?: StringWithAggregatesFilter<"AnnonceSection"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"AnnonceSection"> | string | null
    videoUrl?: StringNullableWithAggregatesFilter<"AnnonceSection"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AnnonceSection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AnnonceSection"> | Date | string
  }

  export type HoraireWhereInput = {
    AND?: HoraireWhereInput | HoraireWhereInput[]
    OR?: HoraireWhereInput[]
    NOT?: HoraireWhereInput | HoraireWhereInput[]
    id?: IntFilter<"Horaire"> | number
    jour?: StringFilter<"Horaire"> | string
    ouverture?: StringFilter<"Horaire"> | string
    fermeture?: StringFilter<"Horaire"> | string
    status?: BoolFilter<"Horaire"> | boolean
    typecommerce?: EnumTypeCommerceFilter<"Horaire"> | $Enums.TypeCommerce
  }

  export type HoraireOrderByWithRelationInput = {
    id?: SortOrder
    jour?: SortOrder
    ouverture?: SortOrder
    fermeture?: SortOrder
    status?: SortOrder
    typecommerce?: SortOrder
  }

  export type HoraireWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HoraireWhereInput | HoraireWhereInput[]
    OR?: HoraireWhereInput[]
    NOT?: HoraireWhereInput | HoraireWhereInput[]
    jour?: StringFilter<"Horaire"> | string
    ouverture?: StringFilter<"Horaire"> | string
    fermeture?: StringFilter<"Horaire"> | string
    status?: BoolFilter<"Horaire"> | boolean
    typecommerce?: EnumTypeCommerceFilter<"Horaire"> | $Enums.TypeCommerce
  }, "id">

  export type HoraireOrderByWithAggregationInput = {
    id?: SortOrder
    jour?: SortOrder
    ouverture?: SortOrder
    fermeture?: SortOrder
    status?: SortOrder
    typecommerce?: SortOrder
    _count?: HoraireCountOrderByAggregateInput
    _avg?: HoraireAvgOrderByAggregateInput
    _max?: HoraireMaxOrderByAggregateInput
    _min?: HoraireMinOrderByAggregateInput
    _sum?: HoraireSumOrderByAggregateInput
  }

  export type HoraireScalarWhereWithAggregatesInput = {
    AND?: HoraireScalarWhereWithAggregatesInput | HoraireScalarWhereWithAggregatesInput[]
    OR?: HoraireScalarWhereWithAggregatesInput[]
    NOT?: HoraireScalarWhereWithAggregatesInput | HoraireScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Horaire"> | number
    jour?: StringWithAggregatesFilter<"Horaire"> | string
    ouverture?: StringWithAggregatesFilter<"Horaire"> | string
    fermeture?: StringWithAggregatesFilter<"Horaire"> | string
    status?: BoolWithAggregatesFilter<"Horaire"> | boolean
    typecommerce?: EnumTypeCommerceWithAggregatesFilter<"Horaire"> | $Enums.TypeCommerce
  }

  export type HistoireWhereInput = {
    AND?: HistoireWhereInput | HistoireWhereInput[]
    OR?: HistoireWhereInput[]
    NOT?: HistoireWhereInput | HistoireWhereInput[]
    id?: IntFilter<"Histoire"> | number
    titre?: StringFilter<"Histoire"> | string
    annee?: IntFilter<"Histoire"> | number
    description?: StringFilter<"Histoire"> | string
    imageUrl?: StringFilter<"Histoire"> | string
  }

  export type HistoireOrderByWithRelationInput = {
    id?: SortOrder
    titre?: SortOrder
    annee?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
  }

  export type HistoireWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HistoireWhereInput | HistoireWhereInput[]
    OR?: HistoireWhereInput[]
    NOT?: HistoireWhereInput | HistoireWhereInput[]
    titre?: StringFilter<"Histoire"> | string
    annee?: IntFilter<"Histoire"> | number
    description?: StringFilter<"Histoire"> | string
    imageUrl?: StringFilter<"Histoire"> | string
  }, "id">

  export type HistoireOrderByWithAggregationInput = {
    id?: SortOrder
    titre?: SortOrder
    annee?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    _count?: HistoireCountOrderByAggregateInput
    _avg?: HistoireAvgOrderByAggregateInput
    _max?: HistoireMaxOrderByAggregateInput
    _min?: HistoireMinOrderByAggregateInput
    _sum?: HistoireSumOrderByAggregateInput
  }

  export type HistoireScalarWhereWithAggregatesInput = {
    AND?: HistoireScalarWhereWithAggregatesInput | HistoireScalarWhereWithAggregatesInput[]
    OR?: HistoireScalarWhereWithAggregatesInput[]
    NOT?: HistoireScalarWhereWithAggregatesInput | HistoireScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Histoire"> | number
    titre?: StringWithAggregatesFilter<"Histoire"> | string
    annee?: IntWithAggregatesFilter<"Histoire"> | number
    description?: StringWithAggregatesFilter<"Histoire"> | string
    imageUrl?: StringWithAggregatesFilter<"Histoire"> | string
  }

  export type CommerceWhereInput = {
    AND?: CommerceWhereInput | CommerceWhereInput[]
    OR?: CommerceWhereInput[]
    NOT?: CommerceWhereInput | CommerceWhereInput[]
    id?: IntFilter<"Commerce"> | number
    titre?: StringFilter<"Commerce"> | string
    description?: StringFilter<"Commerce"> | string
    imageUrl?: StringFilter<"Commerce"> | string
    type?: EnumTypeCommerceFilter<"Commerce"> | $Enums.TypeCommerce
    datecreation?: DateTimeFilter<"Commerce"> | Date | string
    telephone?: StringNullableFilter<"Commerce"> | string | null
    galerie?: CommerceGalerieListRelationFilter
    sections?: CommerceSectionListRelationFilter
  }

  export type CommerceOrderByWithRelationInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    type?: SortOrder
    datecreation?: SortOrder
    telephone?: SortOrderInput | SortOrder
    galerie?: CommerceGalerieOrderByRelationAggregateInput
    sections?: CommerceSectionOrderByRelationAggregateInput
  }

  export type CommerceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommerceWhereInput | CommerceWhereInput[]
    OR?: CommerceWhereInput[]
    NOT?: CommerceWhereInput | CommerceWhereInput[]
    titre?: StringFilter<"Commerce"> | string
    description?: StringFilter<"Commerce"> | string
    imageUrl?: StringFilter<"Commerce"> | string
    type?: EnumTypeCommerceFilter<"Commerce"> | $Enums.TypeCommerce
    datecreation?: DateTimeFilter<"Commerce"> | Date | string
    telephone?: StringNullableFilter<"Commerce"> | string | null
    galerie?: CommerceGalerieListRelationFilter
    sections?: CommerceSectionListRelationFilter
  }, "id">

  export type CommerceOrderByWithAggregationInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    type?: SortOrder
    datecreation?: SortOrder
    telephone?: SortOrderInput | SortOrder
    _count?: CommerceCountOrderByAggregateInput
    _avg?: CommerceAvgOrderByAggregateInput
    _max?: CommerceMaxOrderByAggregateInput
    _min?: CommerceMinOrderByAggregateInput
    _sum?: CommerceSumOrderByAggregateInput
  }

  export type CommerceScalarWhereWithAggregatesInput = {
    AND?: CommerceScalarWhereWithAggregatesInput | CommerceScalarWhereWithAggregatesInput[]
    OR?: CommerceScalarWhereWithAggregatesInput[]
    NOT?: CommerceScalarWhereWithAggregatesInput | CommerceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Commerce"> | number
    titre?: StringWithAggregatesFilter<"Commerce"> | string
    description?: StringWithAggregatesFilter<"Commerce"> | string
    imageUrl?: StringWithAggregatesFilter<"Commerce"> | string
    type?: EnumTypeCommerceWithAggregatesFilter<"Commerce"> | $Enums.TypeCommerce
    datecreation?: DateTimeWithAggregatesFilter<"Commerce"> | Date | string
    telephone?: StringNullableWithAggregatesFilter<"Commerce"> | string | null
  }

  export type CommerceSectionWhereInput = {
    AND?: CommerceSectionWhereInput | CommerceSectionWhereInput[]
    OR?: CommerceSectionWhereInput[]
    NOT?: CommerceSectionWhereInput | CommerceSectionWhereInput[]
    id?: IntFilter<"CommerceSection"> | number
    commerceId?: IntFilter<"CommerceSection"> | number
    ordre?: IntFilter<"CommerceSection"> | number
    type?: EnumTypeSectionFilter<"CommerceSection"> | $Enums.TypeSection
    contenu?: StringFilter<"CommerceSection"> | string
    imageUrl?: StringNullableFilter<"CommerceSection"> | string | null
    videoUrl?: StringNullableFilter<"CommerceSection"> | string | null
    createdAt?: DateTimeFilter<"CommerceSection"> | Date | string
    updatedAt?: DateTimeFilter<"CommerceSection"> | Date | string
    commerce?: XOR<CommerceScalarRelationFilter, CommerceWhereInput>
  }

  export type CommerceSectionOrderByWithRelationInput = {
    id?: SortOrder
    commerceId?: SortOrder
    ordre?: SortOrder
    type?: SortOrder
    contenu?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    videoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    commerce?: CommerceOrderByWithRelationInput
  }

  export type CommerceSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommerceSectionWhereInput | CommerceSectionWhereInput[]
    OR?: CommerceSectionWhereInput[]
    NOT?: CommerceSectionWhereInput | CommerceSectionWhereInput[]
    commerceId?: IntFilter<"CommerceSection"> | number
    ordre?: IntFilter<"CommerceSection"> | number
    type?: EnumTypeSectionFilter<"CommerceSection"> | $Enums.TypeSection
    contenu?: StringFilter<"CommerceSection"> | string
    imageUrl?: StringNullableFilter<"CommerceSection"> | string | null
    videoUrl?: StringNullableFilter<"CommerceSection"> | string | null
    createdAt?: DateTimeFilter<"CommerceSection"> | Date | string
    updatedAt?: DateTimeFilter<"CommerceSection"> | Date | string
    commerce?: XOR<CommerceScalarRelationFilter, CommerceWhereInput>
  }, "id">

  export type CommerceSectionOrderByWithAggregationInput = {
    id?: SortOrder
    commerceId?: SortOrder
    ordre?: SortOrder
    type?: SortOrder
    contenu?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    videoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommerceSectionCountOrderByAggregateInput
    _avg?: CommerceSectionAvgOrderByAggregateInput
    _max?: CommerceSectionMaxOrderByAggregateInput
    _min?: CommerceSectionMinOrderByAggregateInput
    _sum?: CommerceSectionSumOrderByAggregateInput
  }

  export type CommerceSectionScalarWhereWithAggregatesInput = {
    AND?: CommerceSectionScalarWhereWithAggregatesInput | CommerceSectionScalarWhereWithAggregatesInput[]
    OR?: CommerceSectionScalarWhereWithAggregatesInput[]
    NOT?: CommerceSectionScalarWhereWithAggregatesInput | CommerceSectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CommerceSection"> | number
    commerceId?: IntWithAggregatesFilter<"CommerceSection"> | number
    ordre?: IntWithAggregatesFilter<"CommerceSection"> | number
    type?: EnumTypeSectionWithAggregatesFilter<"CommerceSection"> | $Enums.TypeSection
    contenu?: StringWithAggregatesFilter<"CommerceSection"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"CommerceSection"> | string | null
    videoUrl?: StringNullableWithAggregatesFilter<"CommerceSection"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CommerceSection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CommerceSection"> | Date | string
  }

  export type CommerceGalerieWhereInput = {
    AND?: CommerceGalerieWhereInput | CommerceGalerieWhereInput[]
    OR?: CommerceGalerieWhereInput[]
    NOT?: CommerceGalerieWhereInput | CommerceGalerieWhereInput[]
    id?: IntFilter<"CommerceGalerie"> | number
    imageUrl?: StringFilter<"CommerceGalerie"> | string
    description?: StringNullableFilter<"CommerceGalerie"> | string | null
    commerceId?: IntFilter<"CommerceGalerie"> | number
    createdAt?: DateTimeFilter<"CommerceGalerie"> | Date | string
    commerce?: XOR<CommerceScalarRelationFilter, CommerceWhereInput>
  }

  export type CommerceGalerieOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrderInput | SortOrder
    commerceId?: SortOrder
    createdAt?: SortOrder
    commerce?: CommerceOrderByWithRelationInput
  }

  export type CommerceGalerieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommerceGalerieWhereInput | CommerceGalerieWhereInput[]
    OR?: CommerceGalerieWhereInput[]
    NOT?: CommerceGalerieWhereInput | CommerceGalerieWhereInput[]
    imageUrl?: StringFilter<"CommerceGalerie"> | string
    description?: StringNullableFilter<"CommerceGalerie"> | string | null
    commerceId?: IntFilter<"CommerceGalerie"> | number
    createdAt?: DateTimeFilter<"CommerceGalerie"> | Date | string
    commerce?: XOR<CommerceScalarRelationFilter, CommerceWhereInput>
  }, "id">

  export type CommerceGalerieOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrderInput | SortOrder
    commerceId?: SortOrder
    createdAt?: SortOrder
    _count?: CommerceGalerieCountOrderByAggregateInput
    _avg?: CommerceGalerieAvgOrderByAggregateInput
    _max?: CommerceGalerieMaxOrderByAggregateInput
    _min?: CommerceGalerieMinOrderByAggregateInput
    _sum?: CommerceGalerieSumOrderByAggregateInput
  }

  export type CommerceGalerieScalarWhereWithAggregatesInput = {
    AND?: CommerceGalerieScalarWhereWithAggregatesInput | CommerceGalerieScalarWhereWithAggregatesInput[]
    OR?: CommerceGalerieScalarWhereWithAggregatesInput[]
    NOT?: CommerceGalerieScalarWhereWithAggregatesInput | CommerceGalerieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CommerceGalerie"> | number
    imageUrl?: StringWithAggregatesFilter<"CommerceGalerie"> | string
    description?: StringNullableWithAggregatesFilter<"CommerceGalerie"> | string | null
    commerceId?: IntWithAggregatesFilter<"CommerceGalerie"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CommerceGalerie"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CategorieAnnonceCreateInput = {
    nom: string
    description?: string | null
    annonces?: AnnoncesCreateNestedManyWithoutCategorieInput
  }

  export type CategorieAnnonceUncheckedCreateInput = {
    id?: number
    nom: string
    description?: string | null
    annonces?: AnnoncesUncheckedCreateNestedManyWithoutCategorieInput
  }

  export type CategorieAnnonceUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    annonces?: AnnoncesUpdateManyWithoutCategorieNestedInput
  }

  export type CategorieAnnonceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    annonces?: AnnoncesUncheckedUpdateManyWithoutCategorieNestedInput
  }

  export type CategorieAnnonceCreateManyInput = {
    id?: number
    nom: string
    description?: string | null
  }

  export type CategorieAnnonceUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategorieAnnonceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnnoncesCreateInput = {
    titre: string
    description: string
    imageUrl: string
    new?: boolean
    datecreation?: Date | string
    sections?: AnnonceSectionCreateNestedManyWithoutAnnonceInput
    categorie?: CategorieAnnonceCreateNestedOneWithoutAnnoncesInput
    galerie?: GalerieCreateNestedManyWithoutAnnonceInput
  }

  export type AnnoncesUncheckedCreateInput = {
    id?: number
    titre: string
    description: string
    imageUrl: string
    new?: boolean
    datecreation?: Date | string
    categorieId?: number | null
    sections?: AnnonceSectionUncheckedCreateNestedManyWithoutAnnonceInput
    galerie?: GalerieUncheckedCreateNestedManyWithoutAnnonceInput
  }

  export type AnnoncesUpdateInput = {
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    new?: BoolFieldUpdateOperationsInput | boolean
    datecreation?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: AnnonceSectionUpdateManyWithoutAnnonceNestedInput
    categorie?: CategorieAnnonceUpdateOneWithoutAnnoncesNestedInput
    galerie?: GalerieUpdateManyWithoutAnnonceNestedInput
  }

  export type AnnoncesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    new?: BoolFieldUpdateOperationsInput | boolean
    datecreation?: DateTimeFieldUpdateOperationsInput | Date | string
    categorieId?: NullableIntFieldUpdateOperationsInput | number | null
    sections?: AnnonceSectionUncheckedUpdateManyWithoutAnnonceNestedInput
    galerie?: GalerieUncheckedUpdateManyWithoutAnnonceNestedInput
  }

  export type AnnoncesCreateManyInput = {
    id?: number
    titre: string
    description: string
    imageUrl: string
    new?: boolean
    datecreation?: Date | string
    categorieId?: number | null
  }

  export type AnnoncesUpdateManyMutationInput = {
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    new?: BoolFieldUpdateOperationsInput | boolean
    datecreation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnoncesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    new?: BoolFieldUpdateOperationsInput | boolean
    datecreation?: DateTimeFieldUpdateOperationsInput | Date | string
    categorieId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GalerieCreateInput = {
    imageUrl: string
    description?: string | null
    createdAt?: Date | string
    annonce: AnnoncesCreateNestedOneWithoutGalerieInput
  }

  export type GalerieUncheckedCreateInput = {
    id?: number
    imageUrl: string
    description?: string | null
    annonceId: number
    createdAt?: Date | string
  }

  export type GalerieUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    annonce?: AnnoncesUpdateOneRequiredWithoutGalerieNestedInput
  }

  export type GalerieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    annonceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalerieCreateManyInput = {
    id?: number
    imageUrl: string
    description?: string | null
    annonceId: number
    createdAt?: Date | string
  }

  export type GalerieUpdateManyMutationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalerieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    annonceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnonceSectionCreateInput = {
    ordre: number
    type: $Enums.TypeSection
    contenu: string
    imageUrl?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    annonce: AnnoncesCreateNestedOneWithoutSectionsInput
  }

  export type AnnonceSectionUncheckedCreateInput = {
    id?: number
    annonceId: number
    ordre: number
    type: $Enums.TypeSection
    contenu: string
    imageUrl?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnonceSectionUpdateInput = {
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeSectionFieldUpdateOperationsInput | $Enums.TypeSection
    contenu?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    annonce?: AnnoncesUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type AnnonceSectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    annonceId?: IntFieldUpdateOperationsInput | number
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeSectionFieldUpdateOperationsInput | $Enums.TypeSection
    contenu?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnonceSectionCreateManyInput = {
    id?: number
    annonceId: number
    ordre: number
    type: $Enums.TypeSection
    contenu: string
    imageUrl?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnonceSectionUpdateManyMutationInput = {
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeSectionFieldUpdateOperationsInput | $Enums.TypeSection
    contenu?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnonceSectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    annonceId?: IntFieldUpdateOperationsInput | number
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeSectionFieldUpdateOperationsInput | $Enums.TypeSection
    contenu?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoraireCreateInput = {
    jour: string
    ouverture: string
    fermeture: string
    status?: boolean
    typecommerce: $Enums.TypeCommerce
  }

  export type HoraireUncheckedCreateInput = {
    id?: number
    jour: string
    ouverture: string
    fermeture: string
    status?: boolean
    typecommerce: $Enums.TypeCommerce
  }

  export type HoraireUpdateInput = {
    jour?: StringFieldUpdateOperationsInput | string
    ouverture?: StringFieldUpdateOperationsInput | string
    fermeture?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    typecommerce?: EnumTypeCommerceFieldUpdateOperationsInput | $Enums.TypeCommerce
  }

  export type HoraireUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jour?: StringFieldUpdateOperationsInput | string
    ouverture?: StringFieldUpdateOperationsInput | string
    fermeture?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    typecommerce?: EnumTypeCommerceFieldUpdateOperationsInput | $Enums.TypeCommerce
  }

  export type HoraireCreateManyInput = {
    id?: number
    jour: string
    ouverture: string
    fermeture: string
    status?: boolean
    typecommerce: $Enums.TypeCommerce
  }

  export type HoraireUpdateManyMutationInput = {
    jour?: StringFieldUpdateOperationsInput | string
    ouverture?: StringFieldUpdateOperationsInput | string
    fermeture?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    typecommerce?: EnumTypeCommerceFieldUpdateOperationsInput | $Enums.TypeCommerce
  }

  export type HoraireUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jour?: StringFieldUpdateOperationsInput | string
    ouverture?: StringFieldUpdateOperationsInput | string
    fermeture?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    typecommerce?: EnumTypeCommerceFieldUpdateOperationsInput | $Enums.TypeCommerce
  }

  export type HistoireCreateInput = {
    titre: string
    annee: number
    description: string
    imageUrl: string
  }

  export type HistoireUncheckedCreateInput = {
    id?: number
    titre: string
    annee: number
    description: string
    imageUrl: string
  }

  export type HistoireUpdateInput = {
    titre?: StringFieldUpdateOperationsInput | string
    annee?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type HistoireUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    annee?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type HistoireCreateManyInput = {
    id?: number
    titre: string
    annee: number
    description: string
    imageUrl: string
  }

  export type HistoireUpdateManyMutationInput = {
    titre?: StringFieldUpdateOperationsInput | string
    annee?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type HistoireUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    annee?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type CommerceCreateInput = {
    titre: string
    description: string
    imageUrl: string
    type: $Enums.TypeCommerce
    datecreation?: Date | string
    telephone?: string | null
    galerie?: CommerceGalerieCreateNestedManyWithoutCommerceInput
    sections?: CommerceSectionCreateNestedManyWithoutCommerceInput
  }

  export type CommerceUncheckedCreateInput = {
    id?: number
    titre: string
    description: string
    imageUrl: string
    type: $Enums.TypeCommerce
    datecreation?: Date | string
    telephone?: string | null
    galerie?: CommerceGalerieUncheckedCreateNestedManyWithoutCommerceInput
    sections?: CommerceSectionUncheckedCreateNestedManyWithoutCommerceInput
  }

  export type CommerceUpdateInput = {
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeCommerceFieldUpdateOperationsInput | $Enums.TypeCommerce
    datecreation?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    galerie?: CommerceGalerieUpdateManyWithoutCommerceNestedInput
    sections?: CommerceSectionUpdateManyWithoutCommerceNestedInput
  }

  export type CommerceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeCommerceFieldUpdateOperationsInput | $Enums.TypeCommerce
    datecreation?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    galerie?: CommerceGalerieUncheckedUpdateManyWithoutCommerceNestedInput
    sections?: CommerceSectionUncheckedUpdateManyWithoutCommerceNestedInput
  }

  export type CommerceCreateManyInput = {
    id?: number
    titre: string
    description: string
    imageUrl: string
    type: $Enums.TypeCommerce
    datecreation?: Date | string
    telephone?: string | null
  }

  export type CommerceUpdateManyMutationInput = {
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeCommerceFieldUpdateOperationsInput | $Enums.TypeCommerce
    datecreation?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommerceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeCommerceFieldUpdateOperationsInput | $Enums.TypeCommerce
    datecreation?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommerceSectionCreateInput = {
    ordre: number
    type: $Enums.TypeSection
    contenu: string
    imageUrl?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    commerce: CommerceCreateNestedOneWithoutSectionsInput
  }

  export type CommerceSectionUncheckedCreateInput = {
    id?: number
    commerceId: number
    ordre: number
    type: $Enums.TypeSection
    contenu: string
    imageUrl?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommerceSectionUpdateInput = {
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeSectionFieldUpdateOperationsInput | $Enums.TypeSection
    contenu?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commerce?: CommerceUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type CommerceSectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    commerceId?: IntFieldUpdateOperationsInput | number
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeSectionFieldUpdateOperationsInput | $Enums.TypeSection
    contenu?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommerceSectionCreateManyInput = {
    id?: number
    commerceId: number
    ordre: number
    type: $Enums.TypeSection
    contenu: string
    imageUrl?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommerceSectionUpdateManyMutationInput = {
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeSectionFieldUpdateOperationsInput | $Enums.TypeSection
    contenu?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommerceSectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    commerceId?: IntFieldUpdateOperationsInput | number
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeSectionFieldUpdateOperationsInput | $Enums.TypeSection
    contenu?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommerceGalerieCreateInput = {
    imageUrl: string
    description?: string | null
    createdAt?: Date | string
    commerce: CommerceCreateNestedOneWithoutGalerieInput
  }

  export type CommerceGalerieUncheckedCreateInput = {
    id?: number
    imageUrl: string
    description?: string | null
    commerceId: number
    createdAt?: Date | string
  }

  export type CommerceGalerieUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commerce?: CommerceUpdateOneRequiredWithoutGalerieNestedInput
  }

  export type CommerceGalerieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    commerceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommerceGalerieCreateManyInput = {
    id?: number
    imageUrl: string
    description?: string | null
    commerceId: number
    createdAt?: Date | string
  }

  export type CommerceGalerieUpdateManyMutationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommerceGalerieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    commerceId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    username: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AnnoncesListRelationFilter = {
    every?: AnnoncesWhereInput
    some?: AnnoncesWhereInput
    none?: AnnoncesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AnnoncesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategorieAnnonceCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
  }

  export type CategorieAnnonceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategorieAnnonceMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
  }

  export type CategorieAnnonceMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
  }

  export type CategorieAnnonceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AnnonceSectionListRelationFilter = {
    every?: AnnonceSectionWhereInput
    some?: AnnonceSectionWhereInput
    none?: AnnonceSectionWhereInput
  }

  export type CategorieAnnonceNullableScalarRelationFilter = {
    is?: CategorieAnnonceWhereInput | null
    isNot?: CategorieAnnonceWhereInput | null
  }

  export type GalerieListRelationFilter = {
    every?: GalerieWhereInput
    some?: GalerieWhereInput
    none?: GalerieWhereInput
  }

  export type AnnonceSectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GalerieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnnoncesCountOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    new?: SortOrder
    datecreation?: SortOrder
    categorieId?: SortOrder
  }

  export type AnnoncesAvgOrderByAggregateInput = {
    id?: SortOrder
    categorieId?: SortOrder
  }

  export type AnnoncesMaxOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    new?: SortOrder
    datecreation?: SortOrder
    categorieId?: SortOrder
  }

  export type AnnoncesMinOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    new?: SortOrder
    datecreation?: SortOrder
    categorieId?: SortOrder
  }

  export type AnnoncesSumOrderByAggregateInput = {
    id?: SortOrder
    categorieId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AnnoncesScalarRelationFilter = {
    is?: AnnoncesWhereInput
    isNot?: AnnoncesWhereInput
  }

  export type GalerieCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    annonceId?: SortOrder
    createdAt?: SortOrder
  }

  export type GalerieAvgOrderByAggregateInput = {
    id?: SortOrder
    annonceId?: SortOrder
  }

  export type GalerieMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    annonceId?: SortOrder
    createdAt?: SortOrder
  }

  export type GalerieMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    annonceId?: SortOrder
    createdAt?: SortOrder
  }

  export type GalerieSumOrderByAggregateInput = {
    id?: SortOrder
    annonceId?: SortOrder
  }

  export type EnumTypeSectionFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeSection | EnumTypeSectionFieldRefInput<$PrismaModel>
    in?: $Enums.TypeSection[] | ListEnumTypeSectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeSection[] | ListEnumTypeSectionFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeSectionFilter<$PrismaModel> | $Enums.TypeSection
  }

  export type AnnonceSectionCountOrderByAggregateInput = {
    id?: SortOrder
    annonceId?: SortOrder
    ordre?: SortOrder
    type?: SortOrder
    contenu?: SortOrder
    imageUrl?: SortOrder
    videoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnonceSectionAvgOrderByAggregateInput = {
    id?: SortOrder
    annonceId?: SortOrder
    ordre?: SortOrder
  }

  export type AnnonceSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    annonceId?: SortOrder
    ordre?: SortOrder
    type?: SortOrder
    contenu?: SortOrder
    imageUrl?: SortOrder
    videoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnonceSectionMinOrderByAggregateInput = {
    id?: SortOrder
    annonceId?: SortOrder
    ordre?: SortOrder
    type?: SortOrder
    contenu?: SortOrder
    imageUrl?: SortOrder
    videoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnonceSectionSumOrderByAggregateInput = {
    id?: SortOrder
    annonceId?: SortOrder
    ordre?: SortOrder
  }

  export type EnumTypeSectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeSection | EnumTypeSectionFieldRefInput<$PrismaModel>
    in?: $Enums.TypeSection[] | ListEnumTypeSectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeSection[] | ListEnumTypeSectionFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeSectionWithAggregatesFilter<$PrismaModel> | $Enums.TypeSection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeSectionFilter<$PrismaModel>
    _max?: NestedEnumTypeSectionFilter<$PrismaModel>
  }

  export type EnumTypeCommerceFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeCommerce | EnumTypeCommerceFieldRefInput<$PrismaModel>
    in?: $Enums.TypeCommerce[] | ListEnumTypeCommerceFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeCommerce[] | ListEnumTypeCommerceFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeCommerceFilter<$PrismaModel> | $Enums.TypeCommerce
  }

  export type HoraireCountOrderByAggregateInput = {
    id?: SortOrder
    jour?: SortOrder
    ouverture?: SortOrder
    fermeture?: SortOrder
    status?: SortOrder
    typecommerce?: SortOrder
  }

  export type HoraireAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HoraireMaxOrderByAggregateInput = {
    id?: SortOrder
    jour?: SortOrder
    ouverture?: SortOrder
    fermeture?: SortOrder
    status?: SortOrder
    typecommerce?: SortOrder
  }

  export type HoraireMinOrderByAggregateInput = {
    id?: SortOrder
    jour?: SortOrder
    ouverture?: SortOrder
    fermeture?: SortOrder
    status?: SortOrder
    typecommerce?: SortOrder
  }

  export type HoraireSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumTypeCommerceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeCommerce | EnumTypeCommerceFieldRefInput<$PrismaModel>
    in?: $Enums.TypeCommerce[] | ListEnumTypeCommerceFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeCommerce[] | ListEnumTypeCommerceFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeCommerceWithAggregatesFilter<$PrismaModel> | $Enums.TypeCommerce
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeCommerceFilter<$PrismaModel>
    _max?: NestedEnumTypeCommerceFilter<$PrismaModel>
  }

  export type HistoireCountOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    annee?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
  }

  export type HistoireAvgOrderByAggregateInput = {
    id?: SortOrder
    annee?: SortOrder
  }

  export type HistoireMaxOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    annee?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
  }

  export type HistoireMinOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    annee?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
  }

  export type HistoireSumOrderByAggregateInput = {
    id?: SortOrder
    annee?: SortOrder
  }

  export type CommerceGalerieListRelationFilter = {
    every?: CommerceGalerieWhereInput
    some?: CommerceGalerieWhereInput
    none?: CommerceGalerieWhereInput
  }

  export type CommerceSectionListRelationFilter = {
    every?: CommerceSectionWhereInput
    some?: CommerceSectionWhereInput
    none?: CommerceSectionWhereInput
  }

  export type CommerceGalerieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommerceSectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommerceCountOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    type?: SortOrder
    datecreation?: SortOrder
    telephone?: SortOrder
  }

  export type CommerceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CommerceMaxOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    type?: SortOrder
    datecreation?: SortOrder
    telephone?: SortOrder
  }

  export type CommerceMinOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    type?: SortOrder
    datecreation?: SortOrder
    telephone?: SortOrder
  }

  export type CommerceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CommerceScalarRelationFilter = {
    is?: CommerceWhereInput
    isNot?: CommerceWhereInput
  }

  export type CommerceSectionCountOrderByAggregateInput = {
    id?: SortOrder
    commerceId?: SortOrder
    ordre?: SortOrder
    type?: SortOrder
    contenu?: SortOrder
    imageUrl?: SortOrder
    videoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommerceSectionAvgOrderByAggregateInput = {
    id?: SortOrder
    commerceId?: SortOrder
    ordre?: SortOrder
  }

  export type CommerceSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    commerceId?: SortOrder
    ordre?: SortOrder
    type?: SortOrder
    contenu?: SortOrder
    imageUrl?: SortOrder
    videoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommerceSectionMinOrderByAggregateInput = {
    id?: SortOrder
    commerceId?: SortOrder
    ordre?: SortOrder
    type?: SortOrder
    contenu?: SortOrder
    imageUrl?: SortOrder
    videoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommerceSectionSumOrderByAggregateInput = {
    id?: SortOrder
    commerceId?: SortOrder
    ordre?: SortOrder
  }

  export type CommerceGalerieCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    commerceId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommerceGalerieAvgOrderByAggregateInput = {
    id?: SortOrder
    commerceId?: SortOrder
  }

  export type CommerceGalerieMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    commerceId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommerceGalerieMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    commerceId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommerceGalerieSumOrderByAggregateInput = {
    id?: SortOrder
    commerceId?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AnnoncesCreateNestedManyWithoutCategorieInput = {
    create?: XOR<AnnoncesCreateWithoutCategorieInput, AnnoncesUncheckedCreateWithoutCategorieInput> | AnnoncesCreateWithoutCategorieInput[] | AnnoncesUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: AnnoncesCreateOrConnectWithoutCategorieInput | AnnoncesCreateOrConnectWithoutCategorieInput[]
    createMany?: AnnoncesCreateManyCategorieInputEnvelope
    connect?: AnnoncesWhereUniqueInput | AnnoncesWhereUniqueInput[]
  }

  export type AnnoncesUncheckedCreateNestedManyWithoutCategorieInput = {
    create?: XOR<AnnoncesCreateWithoutCategorieInput, AnnoncesUncheckedCreateWithoutCategorieInput> | AnnoncesCreateWithoutCategorieInput[] | AnnoncesUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: AnnoncesCreateOrConnectWithoutCategorieInput | AnnoncesCreateOrConnectWithoutCategorieInput[]
    createMany?: AnnoncesCreateManyCategorieInputEnvelope
    connect?: AnnoncesWhereUniqueInput | AnnoncesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AnnoncesUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<AnnoncesCreateWithoutCategorieInput, AnnoncesUncheckedCreateWithoutCategorieInput> | AnnoncesCreateWithoutCategorieInput[] | AnnoncesUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: AnnoncesCreateOrConnectWithoutCategorieInput | AnnoncesCreateOrConnectWithoutCategorieInput[]
    upsert?: AnnoncesUpsertWithWhereUniqueWithoutCategorieInput | AnnoncesUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: AnnoncesCreateManyCategorieInputEnvelope
    set?: AnnoncesWhereUniqueInput | AnnoncesWhereUniqueInput[]
    disconnect?: AnnoncesWhereUniqueInput | AnnoncesWhereUniqueInput[]
    delete?: AnnoncesWhereUniqueInput | AnnoncesWhereUniqueInput[]
    connect?: AnnoncesWhereUniqueInput | AnnoncesWhereUniqueInput[]
    update?: AnnoncesUpdateWithWhereUniqueWithoutCategorieInput | AnnoncesUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: AnnoncesUpdateManyWithWhereWithoutCategorieInput | AnnoncesUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: AnnoncesScalarWhereInput | AnnoncesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AnnoncesUncheckedUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<AnnoncesCreateWithoutCategorieInput, AnnoncesUncheckedCreateWithoutCategorieInput> | AnnoncesCreateWithoutCategorieInput[] | AnnoncesUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: AnnoncesCreateOrConnectWithoutCategorieInput | AnnoncesCreateOrConnectWithoutCategorieInput[]
    upsert?: AnnoncesUpsertWithWhereUniqueWithoutCategorieInput | AnnoncesUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: AnnoncesCreateManyCategorieInputEnvelope
    set?: AnnoncesWhereUniqueInput | AnnoncesWhereUniqueInput[]
    disconnect?: AnnoncesWhereUniqueInput | AnnoncesWhereUniqueInput[]
    delete?: AnnoncesWhereUniqueInput | AnnoncesWhereUniqueInput[]
    connect?: AnnoncesWhereUniqueInput | AnnoncesWhereUniqueInput[]
    update?: AnnoncesUpdateWithWhereUniqueWithoutCategorieInput | AnnoncesUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: AnnoncesUpdateManyWithWhereWithoutCategorieInput | AnnoncesUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: AnnoncesScalarWhereInput | AnnoncesScalarWhereInput[]
  }

  export type AnnonceSectionCreateNestedManyWithoutAnnonceInput = {
    create?: XOR<AnnonceSectionCreateWithoutAnnonceInput, AnnonceSectionUncheckedCreateWithoutAnnonceInput> | AnnonceSectionCreateWithoutAnnonceInput[] | AnnonceSectionUncheckedCreateWithoutAnnonceInput[]
    connectOrCreate?: AnnonceSectionCreateOrConnectWithoutAnnonceInput | AnnonceSectionCreateOrConnectWithoutAnnonceInput[]
    createMany?: AnnonceSectionCreateManyAnnonceInputEnvelope
    connect?: AnnonceSectionWhereUniqueInput | AnnonceSectionWhereUniqueInput[]
  }

  export type CategorieAnnonceCreateNestedOneWithoutAnnoncesInput = {
    create?: XOR<CategorieAnnonceCreateWithoutAnnoncesInput, CategorieAnnonceUncheckedCreateWithoutAnnoncesInput>
    connectOrCreate?: CategorieAnnonceCreateOrConnectWithoutAnnoncesInput
    connect?: CategorieAnnonceWhereUniqueInput
  }

  export type GalerieCreateNestedManyWithoutAnnonceInput = {
    create?: XOR<GalerieCreateWithoutAnnonceInput, GalerieUncheckedCreateWithoutAnnonceInput> | GalerieCreateWithoutAnnonceInput[] | GalerieUncheckedCreateWithoutAnnonceInput[]
    connectOrCreate?: GalerieCreateOrConnectWithoutAnnonceInput | GalerieCreateOrConnectWithoutAnnonceInput[]
    createMany?: GalerieCreateManyAnnonceInputEnvelope
    connect?: GalerieWhereUniqueInput | GalerieWhereUniqueInput[]
  }

  export type AnnonceSectionUncheckedCreateNestedManyWithoutAnnonceInput = {
    create?: XOR<AnnonceSectionCreateWithoutAnnonceInput, AnnonceSectionUncheckedCreateWithoutAnnonceInput> | AnnonceSectionCreateWithoutAnnonceInput[] | AnnonceSectionUncheckedCreateWithoutAnnonceInput[]
    connectOrCreate?: AnnonceSectionCreateOrConnectWithoutAnnonceInput | AnnonceSectionCreateOrConnectWithoutAnnonceInput[]
    createMany?: AnnonceSectionCreateManyAnnonceInputEnvelope
    connect?: AnnonceSectionWhereUniqueInput | AnnonceSectionWhereUniqueInput[]
  }

  export type GalerieUncheckedCreateNestedManyWithoutAnnonceInput = {
    create?: XOR<GalerieCreateWithoutAnnonceInput, GalerieUncheckedCreateWithoutAnnonceInput> | GalerieCreateWithoutAnnonceInput[] | GalerieUncheckedCreateWithoutAnnonceInput[]
    connectOrCreate?: GalerieCreateOrConnectWithoutAnnonceInput | GalerieCreateOrConnectWithoutAnnonceInput[]
    createMany?: GalerieCreateManyAnnonceInputEnvelope
    connect?: GalerieWhereUniqueInput | GalerieWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AnnonceSectionUpdateManyWithoutAnnonceNestedInput = {
    create?: XOR<AnnonceSectionCreateWithoutAnnonceInput, AnnonceSectionUncheckedCreateWithoutAnnonceInput> | AnnonceSectionCreateWithoutAnnonceInput[] | AnnonceSectionUncheckedCreateWithoutAnnonceInput[]
    connectOrCreate?: AnnonceSectionCreateOrConnectWithoutAnnonceInput | AnnonceSectionCreateOrConnectWithoutAnnonceInput[]
    upsert?: AnnonceSectionUpsertWithWhereUniqueWithoutAnnonceInput | AnnonceSectionUpsertWithWhereUniqueWithoutAnnonceInput[]
    createMany?: AnnonceSectionCreateManyAnnonceInputEnvelope
    set?: AnnonceSectionWhereUniqueInput | AnnonceSectionWhereUniqueInput[]
    disconnect?: AnnonceSectionWhereUniqueInput | AnnonceSectionWhereUniqueInput[]
    delete?: AnnonceSectionWhereUniqueInput | AnnonceSectionWhereUniqueInput[]
    connect?: AnnonceSectionWhereUniqueInput | AnnonceSectionWhereUniqueInput[]
    update?: AnnonceSectionUpdateWithWhereUniqueWithoutAnnonceInput | AnnonceSectionUpdateWithWhereUniqueWithoutAnnonceInput[]
    updateMany?: AnnonceSectionUpdateManyWithWhereWithoutAnnonceInput | AnnonceSectionUpdateManyWithWhereWithoutAnnonceInput[]
    deleteMany?: AnnonceSectionScalarWhereInput | AnnonceSectionScalarWhereInput[]
  }

  export type CategorieAnnonceUpdateOneWithoutAnnoncesNestedInput = {
    create?: XOR<CategorieAnnonceCreateWithoutAnnoncesInput, CategorieAnnonceUncheckedCreateWithoutAnnoncesInput>
    connectOrCreate?: CategorieAnnonceCreateOrConnectWithoutAnnoncesInput
    upsert?: CategorieAnnonceUpsertWithoutAnnoncesInput
    disconnect?: CategorieAnnonceWhereInput | boolean
    delete?: CategorieAnnonceWhereInput | boolean
    connect?: CategorieAnnonceWhereUniqueInput
    update?: XOR<XOR<CategorieAnnonceUpdateToOneWithWhereWithoutAnnoncesInput, CategorieAnnonceUpdateWithoutAnnoncesInput>, CategorieAnnonceUncheckedUpdateWithoutAnnoncesInput>
  }

  export type GalerieUpdateManyWithoutAnnonceNestedInput = {
    create?: XOR<GalerieCreateWithoutAnnonceInput, GalerieUncheckedCreateWithoutAnnonceInput> | GalerieCreateWithoutAnnonceInput[] | GalerieUncheckedCreateWithoutAnnonceInput[]
    connectOrCreate?: GalerieCreateOrConnectWithoutAnnonceInput | GalerieCreateOrConnectWithoutAnnonceInput[]
    upsert?: GalerieUpsertWithWhereUniqueWithoutAnnonceInput | GalerieUpsertWithWhereUniqueWithoutAnnonceInput[]
    createMany?: GalerieCreateManyAnnonceInputEnvelope
    set?: GalerieWhereUniqueInput | GalerieWhereUniqueInput[]
    disconnect?: GalerieWhereUniqueInput | GalerieWhereUniqueInput[]
    delete?: GalerieWhereUniqueInput | GalerieWhereUniqueInput[]
    connect?: GalerieWhereUniqueInput | GalerieWhereUniqueInput[]
    update?: GalerieUpdateWithWhereUniqueWithoutAnnonceInput | GalerieUpdateWithWhereUniqueWithoutAnnonceInput[]
    updateMany?: GalerieUpdateManyWithWhereWithoutAnnonceInput | GalerieUpdateManyWithWhereWithoutAnnonceInput[]
    deleteMany?: GalerieScalarWhereInput | GalerieScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AnnonceSectionUncheckedUpdateManyWithoutAnnonceNestedInput = {
    create?: XOR<AnnonceSectionCreateWithoutAnnonceInput, AnnonceSectionUncheckedCreateWithoutAnnonceInput> | AnnonceSectionCreateWithoutAnnonceInput[] | AnnonceSectionUncheckedCreateWithoutAnnonceInput[]
    connectOrCreate?: AnnonceSectionCreateOrConnectWithoutAnnonceInput | AnnonceSectionCreateOrConnectWithoutAnnonceInput[]
    upsert?: AnnonceSectionUpsertWithWhereUniqueWithoutAnnonceInput | AnnonceSectionUpsertWithWhereUniqueWithoutAnnonceInput[]
    createMany?: AnnonceSectionCreateManyAnnonceInputEnvelope
    set?: AnnonceSectionWhereUniqueInput | AnnonceSectionWhereUniqueInput[]
    disconnect?: AnnonceSectionWhereUniqueInput | AnnonceSectionWhereUniqueInput[]
    delete?: AnnonceSectionWhereUniqueInput | AnnonceSectionWhereUniqueInput[]
    connect?: AnnonceSectionWhereUniqueInput | AnnonceSectionWhereUniqueInput[]
    update?: AnnonceSectionUpdateWithWhereUniqueWithoutAnnonceInput | AnnonceSectionUpdateWithWhereUniqueWithoutAnnonceInput[]
    updateMany?: AnnonceSectionUpdateManyWithWhereWithoutAnnonceInput | AnnonceSectionUpdateManyWithWhereWithoutAnnonceInput[]
    deleteMany?: AnnonceSectionScalarWhereInput | AnnonceSectionScalarWhereInput[]
  }

  export type GalerieUncheckedUpdateManyWithoutAnnonceNestedInput = {
    create?: XOR<GalerieCreateWithoutAnnonceInput, GalerieUncheckedCreateWithoutAnnonceInput> | GalerieCreateWithoutAnnonceInput[] | GalerieUncheckedCreateWithoutAnnonceInput[]
    connectOrCreate?: GalerieCreateOrConnectWithoutAnnonceInput | GalerieCreateOrConnectWithoutAnnonceInput[]
    upsert?: GalerieUpsertWithWhereUniqueWithoutAnnonceInput | GalerieUpsertWithWhereUniqueWithoutAnnonceInput[]
    createMany?: GalerieCreateManyAnnonceInputEnvelope
    set?: GalerieWhereUniqueInput | GalerieWhereUniqueInput[]
    disconnect?: GalerieWhereUniqueInput | GalerieWhereUniqueInput[]
    delete?: GalerieWhereUniqueInput | GalerieWhereUniqueInput[]
    connect?: GalerieWhereUniqueInput | GalerieWhereUniqueInput[]
    update?: GalerieUpdateWithWhereUniqueWithoutAnnonceInput | GalerieUpdateWithWhereUniqueWithoutAnnonceInput[]
    updateMany?: GalerieUpdateManyWithWhereWithoutAnnonceInput | GalerieUpdateManyWithWhereWithoutAnnonceInput[]
    deleteMany?: GalerieScalarWhereInput | GalerieScalarWhereInput[]
  }

  export type AnnoncesCreateNestedOneWithoutGalerieInput = {
    create?: XOR<AnnoncesCreateWithoutGalerieInput, AnnoncesUncheckedCreateWithoutGalerieInput>
    connectOrCreate?: AnnoncesCreateOrConnectWithoutGalerieInput
    connect?: AnnoncesWhereUniqueInput
  }

  export type AnnoncesUpdateOneRequiredWithoutGalerieNestedInput = {
    create?: XOR<AnnoncesCreateWithoutGalerieInput, AnnoncesUncheckedCreateWithoutGalerieInput>
    connectOrCreate?: AnnoncesCreateOrConnectWithoutGalerieInput
    upsert?: AnnoncesUpsertWithoutGalerieInput
    connect?: AnnoncesWhereUniqueInput
    update?: XOR<XOR<AnnoncesUpdateToOneWithWhereWithoutGalerieInput, AnnoncesUpdateWithoutGalerieInput>, AnnoncesUncheckedUpdateWithoutGalerieInput>
  }

  export type AnnoncesCreateNestedOneWithoutSectionsInput = {
    create?: XOR<AnnoncesCreateWithoutSectionsInput, AnnoncesUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: AnnoncesCreateOrConnectWithoutSectionsInput
    connect?: AnnoncesWhereUniqueInput
  }

  export type EnumTypeSectionFieldUpdateOperationsInput = {
    set?: $Enums.TypeSection
  }

  export type AnnoncesUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<AnnoncesCreateWithoutSectionsInput, AnnoncesUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: AnnoncesCreateOrConnectWithoutSectionsInput
    upsert?: AnnoncesUpsertWithoutSectionsInput
    connect?: AnnoncesWhereUniqueInput
    update?: XOR<XOR<AnnoncesUpdateToOneWithWhereWithoutSectionsInput, AnnoncesUpdateWithoutSectionsInput>, AnnoncesUncheckedUpdateWithoutSectionsInput>
  }

  export type EnumTypeCommerceFieldUpdateOperationsInput = {
    set?: $Enums.TypeCommerce
  }

  export type CommerceGalerieCreateNestedManyWithoutCommerceInput = {
    create?: XOR<CommerceGalerieCreateWithoutCommerceInput, CommerceGalerieUncheckedCreateWithoutCommerceInput> | CommerceGalerieCreateWithoutCommerceInput[] | CommerceGalerieUncheckedCreateWithoutCommerceInput[]
    connectOrCreate?: CommerceGalerieCreateOrConnectWithoutCommerceInput | CommerceGalerieCreateOrConnectWithoutCommerceInput[]
    createMany?: CommerceGalerieCreateManyCommerceInputEnvelope
    connect?: CommerceGalerieWhereUniqueInput | CommerceGalerieWhereUniqueInput[]
  }

  export type CommerceSectionCreateNestedManyWithoutCommerceInput = {
    create?: XOR<CommerceSectionCreateWithoutCommerceInput, CommerceSectionUncheckedCreateWithoutCommerceInput> | CommerceSectionCreateWithoutCommerceInput[] | CommerceSectionUncheckedCreateWithoutCommerceInput[]
    connectOrCreate?: CommerceSectionCreateOrConnectWithoutCommerceInput | CommerceSectionCreateOrConnectWithoutCommerceInput[]
    createMany?: CommerceSectionCreateManyCommerceInputEnvelope
    connect?: CommerceSectionWhereUniqueInput | CommerceSectionWhereUniqueInput[]
  }

  export type CommerceGalerieUncheckedCreateNestedManyWithoutCommerceInput = {
    create?: XOR<CommerceGalerieCreateWithoutCommerceInput, CommerceGalerieUncheckedCreateWithoutCommerceInput> | CommerceGalerieCreateWithoutCommerceInput[] | CommerceGalerieUncheckedCreateWithoutCommerceInput[]
    connectOrCreate?: CommerceGalerieCreateOrConnectWithoutCommerceInput | CommerceGalerieCreateOrConnectWithoutCommerceInput[]
    createMany?: CommerceGalerieCreateManyCommerceInputEnvelope
    connect?: CommerceGalerieWhereUniqueInput | CommerceGalerieWhereUniqueInput[]
  }

  export type CommerceSectionUncheckedCreateNestedManyWithoutCommerceInput = {
    create?: XOR<CommerceSectionCreateWithoutCommerceInput, CommerceSectionUncheckedCreateWithoutCommerceInput> | CommerceSectionCreateWithoutCommerceInput[] | CommerceSectionUncheckedCreateWithoutCommerceInput[]
    connectOrCreate?: CommerceSectionCreateOrConnectWithoutCommerceInput | CommerceSectionCreateOrConnectWithoutCommerceInput[]
    createMany?: CommerceSectionCreateManyCommerceInputEnvelope
    connect?: CommerceSectionWhereUniqueInput | CommerceSectionWhereUniqueInput[]
  }

  export type CommerceGalerieUpdateManyWithoutCommerceNestedInput = {
    create?: XOR<CommerceGalerieCreateWithoutCommerceInput, CommerceGalerieUncheckedCreateWithoutCommerceInput> | CommerceGalerieCreateWithoutCommerceInput[] | CommerceGalerieUncheckedCreateWithoutCommerceInput[]
    connectOrCreate?: CommerceGalerieCreateOrConnectWithoutCommerceInput | CommerceGalerieCreateOrConnectWithoutCommerceInput[]
    upsert?: CommerceGalerieUpsertWithWhereUniqueWithoutCommerceInput | CommerceGalerieUpsertWithWhereUniqueWithoutCommerceInput[]
    createMany?: CommerceGalerieCreateManyCommerceInputEnvelope
    set?: CommerceGalerieWhereUniqueInput | CommerceGalerieWhereUniqueInput[]
    disconnect?: CommerceGalerieWhereUniqueInput | CommerceGalerieWhereUniqueInput[]
    delete?: CommerceGalerieWhereUniqueInput | CommerceGalerieWhereUniqueInput[]
    connect?: CommerceGalerieWhereUniqueInput | CommerceGalerieWhereUniqueInput[]
    update?: CommerceGalerieUpdateWithWhereUniqueWithoutCommerceInput | CommerceGalerieUpdateWithWhereUniqueWithoutCommerceInput[]
    updateMany?: CommerceGalerieUpdateManyWithWhereWithoutCommerceInput | CommerceGalerieUpdateManyWithWhereWithoutCommerceInput[]
    deleteMany?: CommerceGalerieScalarWhereInput | CommerceGalerieScalarWhereInput[]
  }

  export type CommerceSectionUpdateManyWithoutCommerceNestedInput = {
    create?: XOR<CommerceSectionCreateWithoutCommerceInput, CommerceSectionUncheckedCreateWithoutCommerceInput> | CommerceSectionCreateWithoutCommerceInput[] | CommerceSectionUncheckedCreateWithoutCommerceInput[]
    connectOrCreate?: CommerceSectionCreateOrConnectWithoutCommerceInput | CommerceSectionCreateOrConnectWithoutCommerceInput[]
    upsert?: CommerceSectionUpsertWithWhereUniqueWithoutCommerceInput | CommerceSectionUpsertWithWhereUniqueWithoutCommerceInput[]
    createMany?: CommerceSectionCreateManyCommerceInputEnvelope
    set?: CommerceSectionWhereUniqueInput | CommerceSectionWhereUniqueInput[]
    disconnect?: CommerceSectionWhereUniqueInput | CommerceSectionWhereUniqueInput[]
    delete?: CommerceSectionWhereUniqueInput | CommerceSectionWhereUniqueInput[]
    connect?: CommerceSectionWhereUniqueInput | CommerceSectionWhereUniqueInput[]
    update?: CommerceSectionUpdateWithWhereUniqueWithoutCommerceInput | CommerceSectionUpdateWithWhereUniqueWithoutCommerceInput[]
    updateMany?: CommerceSectionUpdateManyWithWhereWithoutCommerceInput | CommerceSectionUpdateManyWithWhereWithoutCommerceInput[]
    deleteMany?: CommerceSectionScalarWhereInput | CommerceSectionScalarWhereInput[]
  }

  export type CommerceGalerieUncheckedUpdateManyWithoutCommerceNestedInput = {
    create?: XOR<CommerceGalerieCreateWithoutCommerceInput, CommerceGalerieUncheckedCreateWithoutCommerceInput> | CommerceGalerieCreateWithoutCommerceInput[] | CommerceGalerieUncheckedCreateWithoutCommerceInput[]
    connectOrCreate?: CommerceGalerieCreateOrConnectWithoutCommerceInput | CommerceGalerieCreateOrConnectWithoutCommerceInput[]
    upsert?: CommerceGalerieUpsertWithWhereUniqueWithoutCommerceInput | CommerceGalerieUpsertWithWhereUniqueWithoutCommerceInput[]
    createMany?: CommerceGalerieCreateManyCommerceInputEnvelope
    set?: CommerceGalerieWhereUniqueInput | CommerceGalerieWhereUniqueInput[]
    disconnect?: CommerceGalerieWhereUniqueInput | CommerceGalerieWhereUniqueInput[]
    delete?: CommerceGalerieWhereUniqueInput | CommerceGalerieWhereUniqueInput[]
    connect?: CommerceGalerieWhereUniqueInput | CommerceGalerieWhereUniqueInput[]
    update?: CommerceGalerieUpdateWithWhereUniqueWithoutCommerceInput | CommerceGalerieUpdateWithWhereUniqueWithoutCommerceInput[]
    updateMany?: CommerceGalerieUpdateManyWithWhereWithoutCommerceInput | CommerceGalerieUpdateManyWithWhereWithoutCommerceInput[]
    deleteMany?: CommerceGalerieScalarWhereInput | CommerceGalerieScalarWhereInput[]
  }

  export type CommerceSectionUncheckedUpdateManyWithoutCommerceNestedInput = {
    create?: XOR<CommerceSectionCreateWithoutCommerceInput, CommerceSectionUncheckedCreateWithoutCommerceInput> | CommerceSectionCreateWithoutCommerceInput[] | CommerceSectionUncheckedCreateWithoutCommerceInput[]
    connectOrCreate?: CommerceSectionCreateOrConnectWithoutCommerceInput | CommerceSectionCreateOrConnectWithoutCommerceInput[]
    upsert?: CommerceSectionUpsertWithWhereUniqueWithoutCommerceInput | CommerceSectionUpsertWithWhereUniqueWithoutCommerceInput[]
    createMany?: CommerceSectionCreateManyCommerceInputEnvelope
    set?: CommerceSectionWhereUniqueInput | CommerceSectionWhereUniqueInput[]
    disconnect?: CommerceSectionWhereUniqueInput | CommerceSectionWhereUniqueInput[]
    delete?: CommerceSectionWhereUniqueInput | CommerceSectionWhereUniqueInput[]
    connect?: CommerceSectionWhereUniqueInput | CommerceSectionWhereUniqueInput[]
    update?: CommerceSectionUpdateWithWhereUniqueWithoutCommerceInput | CommerceSectionUpdateWithWhereUniqueWithoutCommerceInput[]
    updateMany?: CommerceSectionUpdateManyWithWhereWithoutCommerceInput | CommerceSectionUpdateManyWithWhereWithoutCommerceInput[]
    deleteMany?: CommerceSectionScalarWhereInput | CommerceSectionScalarWhereInput[]
  }

  export type CommerceCreateNestedOneWithoutSectionsInput = {
    create?: XOR<CommerceCreateWithoutSectionsInput, CommerceUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: CommerceCreateOrConnectWithoutSectionsInput
    connect?: CommerceWhereUniqueInput
  }

  export type CommerceUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<CommerceCreateWithoutSectionsInput, CommerceUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: CommerceCreateOrConnectWithoutSectionsInput
    upsert?: CommerceUpsertWithoutSectionsInput
    connect?: CommerceWhereUniqueInput
    update?: XOR<XOR<CommerceUpdateToOneWithWhereWithoutSectionsInput, CommerceUpdateWithoutSectionsInput>, CommerceUncheckedUpdateWithoutSectionsInput>
  }

  export type CommerceCreateNestedOneWithoutGalerieInput = {
    create?: XOR<CommerceCreateWithoutGalerieInput, CommerceUncheckedCreateWithoutGalerieInput>
    connectOrCreate?: CommerceCreateOrConnectWithoutGalerieInput
    connect?: CommerceWhereUniqueInput
  }

  export type CommerceUpdateOneRequiredWithoutGalerieNestedInput = {
    create?: XOR<CommerceCreateWithoutGalerieInput, CommerceUncheckedCreateWithoutGalerieInput>
    connectOrCreate?: CommerceCreateOrConnectWithoutGalerieInput
    upsert?: CommerceUpsertWithoutGalerieInput
    connect?: CommerceWhereUniqueInput
    update?: XOR<XOR<CommerceUpdateToOneWithWhereWithoutGalerieInput, CommerceUpdateWithoutGalerieInput>, CommerceUncheckedUpdateWithoutGalerieInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTypeSectionFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeSection | EnumTypeSectionFieldRefInput<$PrismaModel>
    in?: $Enums.TypeSection[] | ListEnumTypeSectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeSection[] | ListEnumTypeSectionFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeSectionFilter<$PrismaModel> | $Enums.TypeSection
  }

  export type NestedEnumTypeSectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeSection | EnumTypeSectionFieldRefInput<$PrismaModel>
    in?: $Enums.TypeSection[] | ListEnumTypeSectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeSection[] | ListEnumTypeSectionFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeSectionWithAggregatesFilter<$PrismaModel> | $Enums.TypeSection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeSectionFilter<$PrismaModel>
    _max?: NestedEnumTypeSectionFilter<$PrismaModel>
  }

  export type NestedEnumTypeCommerceFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeCommerce | EnumTypeCommerceFieldRefInput<$PrismaModel>
    in?: $Enums.TypeCommerce[] | ListEnumTypeCommerceFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeCommerce[] | ListEnumTypeCommerceFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeCommerceFilter<$PrismaModel> | $Enums.TypeCommerce
  }

  export type NestedEnumTypeCommerceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeCommerce | EnumTypeCommerceFieldRefInput<$PrismaModel>
    in?: $Enums.TypeCommerce[] | ListEnumTypeCommerceFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeCommerce[] | ListEnumTypeCommerceFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeCommerceWithAggregatesFilter<$PrismaModel> | $Enums.TypeCommerce
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeCommerceFilter<$PrismaModel>
    _max?: NestedEnumTypeCommerceFilter<$PrismaModel>
  }

  export type AnnoncesCreateWithoutCategorieInput = {
    titre: string
    description: string
    imageUrl: string
    new?: boolean
    datecreation?: Date | string
    sections?: AnnonceSectionCreateNestedManyWithoutAnnonceInput
    galerie?: GalerieCreateNestedManyWithoutAnnonceInput
  }

  export type AnnoncesUncheckedCreateWithoutCategorieInput = {
    id?: number
    titre: string
    description: string
    imageUrl: string
    new?: boolean
    datecreation?: Date | string
    sections?: AnnonceSectionUncheckedCreateNestedManyWithoutAnnonceInput
    galerie?: GalerieUncheckedCreateNestedManyWithoutAnnonceInput
  }

  export type AnnoncesCreateOrConnectWithoutCategorieInput = {
    where: AnnoncesWhereUniqueInput
    create: XOR<AnnoncesCreateWithoutCategorieInput, AnnoncesUncheckedCreateWithoutCategorieInput>
  }

  export type AnnoncesCreateManyCategorieInputEnvelope = {
    data: AnnoncesCreateManyCategorieInput | AnnoncesCreateManyCategorieInput[]
    skipDuplicates?: boolean
  }

  export type AnnoncesUpsertWithWhereUniqueWithoutCategorieInput = {
    where: AnnoncesWhereUniqueInput
    update: XOR<AnnoncesUpdateWithoutCategorieInput, AnnoncesUncheckedUpdateWithoutCategorieInput>
    create: XOR<AnnoncesCreateWithoutCategorieInput, AnnoncesUncheckedCreateWithoutCategorieInput>
  }

  export type AnnoncesUpdateWithWhereUniqueWithoutCategorieInput = {
    where: AnnoncesWhereUniqueInput
    data: XOR<AnnoncesUpdateWithoutCategorieInput, AnnoncesUncheckedUpdateWithoutCategorieInput>
  }

  export type AnnoncesUpdateManyWithWhereWithoutCategorieInput = {
    where: AnnoncesScalarWhereInput
    data: XOR<AnnoncesUpdateManyMutationInput, AnnoncesUncheckedUpdateManyWithoutCategorieInput>
  }

  export type AnnoncesScalarWhereInput = {
    AND?: AnnoncesScalarWhereInput | AnnoncesScalarWhereInput[]
    OR?: AnnoncesScalarWhereInput[]
    NOT?: AnnoncesScalarWhereInput | AnnoncesScalarWhereInput[]
    id?: IntFilter<"Annonces"> | number
    titre?: StringFilter<"Annonces"> | string
    description?: StringFilter<"Annonces"> | string
    imageUrl?: StringFilter<"Annonces"> | string
    new?: BoolFilter<"Annonces"> | boolean
    datecreation?: DateTimeFilter<"Annonces"> | Date | string
    categorieId?: IntNullableFilter<"Annonces"> | number | null
  }

  export type AnnonceSectionCreateWithoutAnnonceInput = {
    ordre: number
    type: $Enums.TypeSection
    contenu: string
    imageUrl?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnonceSectionUncheckedCreateWithoutAnnonceInput = {
    id?: number
    ordre: number
    type: $Enums.TypeSection
    contenu: string
    imageUrl?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnonceSectionCreateOrConnectWithoutAnnonceInput = {
    where: AnnonceSectionWhereUniqueInput
    create: XOR<AnnonceSectionCreateWithoutAnnonceInput, AnnonceSectionUncheckedCreateWithoutAnnonceInput>
  }

  export type AnnonceSectionCreateManyAnnonceInputEnvelope = {
    data: AnnonceSectionCreateManyAnnonceInput | AnnonceSectionCreateManyAnnonceInput[]
    skipDuplicates?: boolean
  }

  export type CategorieAnnonceCreateWithoutAnnoncesInput = {
    nom: string
    description?: string | null
  }

  export type CategorieAnnonceUncheckedCreateWithoutAnnoncesInput = {
    id?: number
    nom: string
    description?: string | null
  }

  export type CategorieAnnonceCreateOrConnectWithoutAnnoncesInput = {
    where: CategorieAnnonceWhereUniqueInput
    create: XOR<CategorieAnnonceCreateWithoutAnnoncesInput, CategorieAnnonceUncheckedCreateWithoutAnnoncesInput>
  }

  export type GalerieCreateWithoutAnnonceInput = {
    imageUrl: string
    description?: string | null
    createdAt?: Date | string
  }

  export type GalerieUncheckedCreateWithoutAnnonceInput = {
    id?: number
    imageUrl: string
    description?: string | null
    createdAt?: Date | string
  }

  export type GalerieCreateOrConnectWithoutAnnonceInput = {
    where: GalerieWhereUniqueInput
    create: XOR<GalerieCreateWithoutAnnonceInput, GalerieUncheckedCreateWithoutAnnonceInput>
  }

  export type GalerieCreateManyAnnonceInputEnvelope = {
    data: GalerieCreateManyAnnonceInput | GalerieCreateManyAnnonceInput[]
    skipDuplicates?: boolean
  }

  export type AnnonceSectionUpsertWithWhereUniqueWithoutAnnonceInput = {
    where: AnnonceSectionWhereUniqueInput
    update: XOR<AnnonceSectionUpdateWithoutAnnonceInput, AnnonceSectionUncheckedUpdateWithoutAnnonceInput>
    create: XOR<AnnonceSectionCreateWithoutAnnonceInput, AnnonceSectionUncheckedCreateWithoutAnnonceInput>
  }

  export type AnnonceSectionUpdateWithWhereUniqueWithoutAnnonceInput = {
    where: AnnonceSectionWhereUniqueInput
    data: XOR<AnnonceSectionUpdateWithoutAnnonceInput, AnnonceSectionUncheckedUpdateWithoutAnnonceInput>
  }

  export type AnnonceSectionUpdateManyWithWhereWithoutAnnonceInput = {
    where: AnnonceSectionScalarWhereInput
    data: XOR<AnnonceSectionUpdateManyMutationInput, AnnonceSectionUncheckedUpdateManyWithoutAnnonceInput>
  }

  export type AnnonceSectionScalarWhereInput = {
    AND?: AnnonceSectionScalarWhereInput | AnnonceSectionScalarWhereInput[]
    OR?: AnnonceSectionScalarWhereInput[]
    NOT?: AnnonceSectionScalarWhereInput | AnnonceSectionScalarWhereInput[]
    id?: IntFilter<"AnnonceSection"> | number
    annonceId?: IntFilter<"AnnonceSection"> | number
    ordre?: IntFilter<"AnnonceSection"> | number
    type?: EnumTypeSectionFilter<"AnnonceSection"> | $Enums.TypeSection
    contenu?: StringFilter<"AnnonceSection"> | string
    imageUrl?: StringNullableFilter<"AnnonceSection"> | string | null
    videoUrl?: StringNullableFilter<"AnnonceSection"> | string | null
    createdAt?: DateTimeFilter<"AnnonceSection"> | Date | string
    updatedAt?: DateTimeFilter<"AnnonceSection"> | Date | string
  }

  export type CategorieAnnonceUpsertWithoutAnnoncesInput = {
    update: XOR<CategorieAnnonceUpdateWithoutAnnoncesInput, CategorieAnnonceUncheckedUpdateWithoutAnnoncesInput>
    create: XOR<CategorieAnnonceCreateWithoutAnnoncesInput, CategorieAnnonceUncheckedCreateWithoutAnnoncesInput>
    where?: CategorieAnnonceWhereInput
  }

  export type CategorieAnnonceUpdateToOneWithWhereWithoutAnnoncesInput = {
    where?: CategorieAnnonceWhereInput
    data: XOR<CategorieAnnonceUpdateWithoutAnnoncesInput, CategorieAnnonceUncheckedUpdateWithoutAnnoncesInput>
  }

  export type CategorieAnnonceUpdateWithoutAnnoncesInput = {
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategorieAnnonceUncheckedUpdateWithoutAnnoncesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GalerieUpsertWithWhereUniqueWithoutAnnonceInput = {
    where: GalerieWhereUniqueInput
    update: XOR<GalerieUpdateWithoutAnnonceInput, GalerieUncheckedUpdateWithoutAnnonceInput>
    create: XOR<GalerieCreateWithoutAnnonceInput, GalerieUncheckedCreateWithoutAnnonceInput>
  }

  export type GalerieUpdateWithWhereUniqueWithoutAnnonceInput = {
    where: GalerieWhereUniqueInput
    data: XOR<GalerieUpdateWithoutAnnonceInput, GalerieUncheckedUpdateWithoutAnnonceInput>
  }

  export type GalerieUpdateManyWithWhereWithoutAnnonceInput = {
    where: GalerieScalarWhereInput
    data: XOR<GalerieUpdateManyMutationInput, GalerieUncheckedUpdateManyWithoutAnnonceInput>
  }

  export type GalerieScalarWhereInput = {
    AND?: GalerieScalarWhereInput | GalerieScalarWhereInput[]
    OR?: GalerieScalarWhereInput[]
    NOT?: GalerieScalarWhereInput | GalerieScalarWhereInput[]
    id?: IntFilter<"Galerie"> | number
    imageUrl?: StringFilter<"Galerie"> | string
    description?: StringNullableFilter<"Galerie"> | string | null
    annonceId?: IntFilter<"Galerie"> | number
    createdAt?: DateTimeFilter<"Galerie"> | Date | string
  }

  export type AnnoncesCreateWithoutGalerieInput = {
    titre: string
    description: string
    imageUrl: string
    new?: boolean
    datecreation?: Date | string
    sections?: AnnonceSectionCreateNestedManyWithoutAnnonceInput
    categorie?: CategorieAnnonceCreateNestedOneWithoutAnnoncesInput
  }

  export type AnnoncesUncheckedCreateWithoutGalerieInput = {
    id?: number
    titre: string
    description: string
    imageUrl: string
    new?: boolean
    datecreation?: Date | string
    categorieId?: number | null
    sections?: AnnonceSectionUncheckedCreateNestedManyWithoutAnnonceInput
  }

  export type AnnoncesCreateOrConnectWithoutGalerieInput = {
    where: AnnoncesWhereUniqueInput
    create: XOR<AnnoncesCreateWithoutGalerieInput, AnnoncesUncheckedCreateWithoutGalerieInput>
  }

  export type AnnoncesUpsertWithoutGalerieInput = {
    update: XOR<AnnoncesUpdateWithoutGalerieInput, AnnoncesUncheckedUpdateWithoutGalerieInput>
    create: XOR<AnnoncesCreateWithoutGalerieInput, AnnoncesUncheckedCreateWithoutGalerieInput>
    where?: AnnoncesWhereInput
  }

  export type AnnoncesUpdateToOneWithWhereWithoutGalerieInput = {
    where?: AnnoncesWhereInput
    data: XOR<AnnoncesUpdateWithoutGalerieInput, AnnoncesUncheckedUpdateWithoutGalerieInput>
  }

  export type AnnoncesUpdateWithoutGalerieInput = {
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    new?: BoolFieldUpdateOperationsInput | boolean
    datecreation?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: AnnonceSectionUpdateManyWithoutAnnonceNestedInput
    categorie?: CategorieAnnonceUpdateOneWithoutAnnoncesNestedInput
  }

  export type AnnoncesUncheckedUpdateWithoutGalerieInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    new?: BoolFieldUpdateOperationsInput | boolean
    datecreation?: DateTimeFieldUpdateOperationsInput | Date | string
    categorieId?: NullableIntFieldUpdateOperationsInput | number | null
    sections?: AnnonceSectionUncheckedUpdateManyWithoutAnnonceNestedInput
  }

  export type AnnoncesCreateWithoutSectionsInput = {
    titre: string
    description: string
    imageUrl: string
    new?: boolean
    datecreation?: Date | string
    categorie?: CategorieAnnonceCreateNestedOneWithoutAnnoncesInput
    galerie?: GalerieCreateNestedManyWithoutAnnonceInput
  }

  export type AnnoncesUncheckedCreateWithoutSectionsInput = {
    id?: number
    titre: string
    description: string
    imageUrl: string
    new?: boolean
    datecreation?: Date | string
    categorieId?: number | null
    galerie?: GalerieUncheckedCreateNestedManyWithoutAnnonceInput
  }

  export type AnnoncesCreateOrConnectWithoutSectionsInput = {
    where: AnnoncesWhereUniqueInput
    create: XOR<AnnoncesCreateWithoutSectionsInput, AnnoncesUncheckedCreateWithoutSectionsInput>
  }

  export type AnnoncesUpsertWithoutSectionsInput = {
    update: XOR<AnnoncesUpdateWithoutSectionsInput, AnnoncesUncheckedUpdateWithoutSectionsInput>
    create: XOR<AnnoncesCreateWithoutSectionsInput, AnnoncesUncheckedCreateWithoutSectionsInput>
    where?: AnnoncesWhereInput
  }

  export type AnnoncesUpdateToOneWithWhereWithoutSectionsInput = {
    where?: AnnoncesWhereInput
    data: XOR<AnnoncesUpdateWithoutSectionsInput, AnnoncesUncheckedUpdateWithoutSectionsInput>
  }

  export type AnnoncesUpdateWithoutSectionsInput = {
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    new?: BoolFieldUpdateOperationsInput | boolean
    datecreation?: DateTimeFieldUpdateOperationsInput | Date | string
    categorie?: CategorieAnnonceUpdateOneWithoutAnnoncesNestedInput
    galerie?: GalerieUpdateManyWithoutAnnonceNestedInput
  }

  export type AnnoncesUncheckedUpdateWithoutSectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    new?: BoolFieldUpdateOperationsInput | boolean
    datecreation?: DateTimeFieldUpdateOperationsInput | Date | string
    categorieId?: NullableIntFieldUpdateOperationsInput | number | null
    galerie?: GalerieUncheckedUpdateManyWithoutAnnonceNestedInput
  }

  export type CommerceGalerieCreateWithoutCommerceInput = {
    imageUrl: string
    description?: string | null
    createdAt?: Date | string
  }

  export type CommerceGalerieUncheckedCreateWithoutCommerceInput = {
    id?: number
    imageUrl: string
    description?: string | null
    createdAt?: Date | string
  }

  export type CommerceGalerieCreateOrConnectWithoutCommerceInput = {
    where: CommerceGalerieWhereUniqueInput
    create: XOR<CommerceGalerieCreateWithoutCommerceInput, CommerceGalerieUncheckedCreateWithoutCommerceInput>
  }

  export type CommerceGalerieCreateManyCommerceInputEnvelope = {
    data: CommerceGalerieCreateManyCommerceInput | CommerceGalerieCreateManyCommerceInput[]
    skipDuplicates?: boolean
  }

  export type CommerceSectionCreateWithoutCommerceInput = {
    ordre: number
    type: $Enums.TypeSection
    contenu: string
    imageUrl?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommerceSectionUncheckedCreateWithoutCommerceInput = {
    id?: number
    ordre: number
    type: $Enums.TypeSection
    contenu: string
    imageUrl?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommerceSectionCreateOrConnectWithoutCommerceInput = {
    where: CommerceSectionWhereUniqueInput
    create: XOR<CommerceSectionCreateWithoutCommerceInput, CommerceSectionUncheckedCreateWithoutCommerceInput>
  }

  export type CommerceSectionCreateManyCommerceInputEnvelope = {
    data: CommerceSectionCreateManyCommerceInput | CommerceSectionCreateManyCommerceInput[]
    skipDuplicates?: boolean
  }

  export type CommerceGalerieUpsertWithWhereUniqueWithoutCommerceInput = {
    where: CommerceGalerieWhereUniqueInput
    update: XOR<CommerceGalerieUpdateWithoutCommerceInput, CommerceGalerieUncheckedUpdateWithoutCommerceInput>
    create: XOR<CommerceGalerieCreateWithoutCommerceInput, CommerceGalerieUncheckedCreateWithoutCommerceInput>
  }

  export type CommerceGalerieUpdateWithWhereUniqueWithoutCommerceInput = {
    where: CommerceGalerieWhereUniqueInput
    data: XOR<CommerceGalerieUpdateWithoutCommerceInput, CommerceGalerieUncheckedUpdateWithoutCommerceInput>
  }

  export type CommerceGalerieUpdateManyWithWhereWithoutCommerceInput = {
    where: CommerceGalerieScalarWhereInput
    data: XOR<CommerceGalerieUpdateManyMutationInput, CommerceGalerieUncheckedUpdateManyWithoutCommerceInput>
  }

  export type CommerceGalerieScalarWhereInput = {
    AND?: CommerceGalerieScalarWhereInput | CommerceGalerieScalarWhereInput[]
    OR?: CommerceGalerieScalarWhereInput[]
    NOT?: CommerceGalerieScalarWhereInput | CommerceGalerieScalarWhereInput[]
    id?: IntFilter<"CommerceGalerie"> | number
    imageUrl?: StringFilter<"CommerceGalerie"> | string
    description?: StringNullableFilter<"CommerceGalerie"> | string | null
    commerceId?: IntFilter<"CommerceGalerie"> | number
    createdAt?: DateTimeFilter<"CommerceGalerie"> | Date | string
  }

  export type CommerceSectionUpsertWithWhereUniqueWithoutCommerceInput = {
    where: CommerceSectionWhereUniqueInput
    update: XOR<CommerceSectionUpdateWithoutCommerceInput, CommerceSectionUncheckedUpdateWithoutCommerceInput>
    create: XOR<CommerceSectionCreateWithoutCommerceInput, CommerceSectionUncheckedCreateWithoutCommerceInput>
  }

  export type CommerceSectionUpdateWithWhereUniqueWithoutCommerceInput = {
    where: CommerceSectionWhereUniqueInput
    data: XOR<CommerceSectionUpdateWithoutCommerceInput, CommerceSectionUncheckedUpdateWithoutCommerceInput>
  }

  export type CommerceSectionUpdateManyWithWhereWithoutCommerceInput = {
    where: CommerceSectionScalarWhereInput
    data: XOR<CommerceSectionUpdateManyMutationInput, CommerceSectionUncheckedUpdateManyWithoutCommerceInput>
  }

  export type CommerceSectionScalarWhereInput = {
    AND?: CommerceSectionScalarWhereInput | CommerceSectionScalarWhereInput[]
    OR?: CommerceSectionScalarWhereInput[]
    NOT?: CommerceSectionScalarWhereInput | CommerceSectionScalarWhereInput[]
    id?: IntFilter<"CommerceSection"> | number
    commerceId?: IntFilter<"CommerceSection"> | number
    ordre?: IntFilter<"CommerceSection"> | number
    type?: EnumTypeSectionFilter<"CommerceSection"> | $Enums.TypeSection
    contenu?: StringFilter<"CommerceSection"> | string
    imageUrl?: StringNullableFilter<"CommerceSection"> | string | null
    videoUrl?: StringNullableFilter<"CommerceSection"> | string | null
    createdAt?: DateTimeFilter<"CommerceSection"> | Date | string
    updatedAt?: DateTimeFilter<"CommerceSection"> | Date | string
  }

  export type CommerceCreateWithoutSectionsInput = {
    titre: string
    description: string
    imageUrl: string
    type: $Enums.TypeCommerce
    datecreation?: Date | string
    telephone?: string | null
    galerie?: CommerceGalerieCreateNestedManyWithoutCommerceInput
  }

  export type CommerceUncheckedCreateWithoutSectionsInput = {
    id?: number
    titre: string
    description: string
    imageUrl: string
    type: $Enums.TypeCommerce
    datecreation?: Date | string
    telephone?: string | null
    galerie?: CommerceGalerieUncheckedCreateNestedManyWithoutCommerceInput
  }

  export type CommerceCreateOrConnectWithoutSectionsInput = {
    where: CommerceWhereUniqueInput
    create: XOR<CommerceCreateWithoutSectionsInput, CommerceUncheckedCreateWithoutSectionsInput>
  }

  export type CommerceUpsertWithoutSectionsInput = {
    update: XOR<CommerceUpdateWithoutSectionsInput, CommerceUncheckedUpdateWithoutSectionsInput>
    create: XOR<CommerceCreateWithoutSectionsInput, CommerceUncheckedCreateWithoutSectionsInput>
    where?: CommerceWhereInput
  }

  export type CommerceUpdateToOneWithWhereWithoutSectionsInput = {
    where?: CommerceWhereInput
    data: XOR<CommerceUpdateWithoutSectionsInput, CommerceUncheckedUpdateWithoutSectionsInput>
  }

  export type CommerceUpdateWithoutSectionsInput = {
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeCommerceFieldUpdateOperationsInput | $Enums.TypeCommerce
    datecreation?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    galerie?: CommerceGalerieUpdateManyWithoutCommerceNestedInput
  }

  export type CommerceUncheckedUpdateWithoutSectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeCommerceFieldUpdateOperationsInput | $Enums.TypeCommerce
    datecreation?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    galerie?: CommerceGalerieUncheckedUpdateManyWithoutCommerceNestedInput
  }

  export type CommerceCreateWithoutGalerieInput = {
    titre: string
    description: string
    imageUrl: string
    type: $Enums.TypeCommerce
    datecreation?: Date | string
    telephone?: string | null
    sections?: CommerceSectionCreateNestedManyWithoutCommerceInput
  }

  export type CommerceUncheckedCreateWithoutGalerieInput = {
    id?: number
    titre: string
    description: string
    imageUrl: string
    type: $Enums.TypeCommerce
    datecreation?: Date | string
    telephone?: string | null
    sections?: CommerceSectionUncheckedCreateNestedManyWithoutCommerceInput
  }

  export type CommerceCreateOrConnectWithoutGalerieInput = {
    where: CommerceWhereUniqueInput
    create: XOR<CommerceCreateWithoutGalerieInput, CommerceUncheckedCreateWithoutGalerieInput>
  }

  export type CommerceUpsertWithoutGalerieInput = {
    update: XOR<CommerceUpdateWithoutGalerieInput, CommerceUncheckedUpdateWithoutGalerieInput>
    create: XOR<CommerceCreateWithoutGalerieInput, CommerceUncheckedCreateWithoutGalerieInput>
    where?: CommerceWhereInput
  }

  export type CommerceUpdateToOneWithWhereWithoutGalerieInput = {
    where?: CommerceWhereInput
    data: XOR<CommerceUpdateWithoutGalerieInput, CommerceUncheckedUpdateWithoutGalerieInput>
  }

  export type CommerceUpdateWithoutGalerieInput = {
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeCommerceFieldUpdateOperationsInput | $Enums.TypeCommerce
    datecreation?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    sections?: CommerceSectionUpdateManyWithoutCommerceNestedInput
  }

  export type CommerceUncheckedUpdateWithoutGalerieInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeCommerceFieldUpdateOperationsInput | $Enums.TypeCommerce
    datecreation?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    sections?: CommerceSectionUncheckedUpdateManyWithoutCommerceNestedInput
  }

  export type AnnoncesCreateManyCategorieInput = {
    id?: number
    titre: string
    description: string
    imageUrl: string
    new?: boolean
    datecreation?: Date | string
  }

  export type AnnoncesUpdateWithoutCategorieInput = {
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    new?: BoolFieldUpdateOperationsInput | boolean
    datecreation?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: AnnonceSectionUpdateManyWithoutAnnonceNestedInput
    galerie?: GalerieUpdateManyWithoutAnnonceNestedInput
  }

  export type AnnoncesUncheckedUpdateWithoutCategorieInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    new?: BoolFieldUpdateOperationsInput | boolean
    datecreation?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: AnnonceSectionUncheckedUpdateManyWithoutAnnonceNestedInput
    galerie?: GalerieUncheckedUpdateManyWithoutAnnonceNestedInput
  }

  export type AnnoncesUncheckedUpdateManyWithoutCategorieInput = {
    id?: IntFieldUpdateOperationsInput | number
    titre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    new?: BoolFieldUpdateOperationsInput | boolean
    datecreation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnonceSectionCreateManyAnnonceInput = {
    id?: number
    ordre: number
    type: $Enums.TypeSection
    contenu: string
    imageUrl?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalerieCreateManyAnnonceInput = {
    id?: number
    imageUrl: string
    description?: string | null
    createdAt?: Date | string
  }

  export type AnnonceSectionUpdateWithoutAnnonceInput = {
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeSectionFieldUpdateOperationsInput | $Enums.TypeSection
    contenu?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnonceSectionUncheckedUpdateWithoutAnnonceInput = {
    id?: IntFieldUpdateOperationsInput | number
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeSectionFieldUpdateOperationsInput | $Enums.TypeSection
    contenu?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnonceSectionUncheckedUpdateManyWithoutAnnonceInput = {
    id?: IntFieldUpdateOperationsInput | number
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeSectionFieldUpdateOperationsInput | $Enums.TypeSection
    contenu?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalerieUpdateWithoutAnnonceInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalerieUncheckedUpdateWithoutAnnonceInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalerieUncheckedUpdateManyWithoutAnnonceInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommerceGalerieCreateManyCommerceInput = {
    id?: number
    imageUrl: string
    description?: string | null
    createdAt?: Date | string
  }

  export type CommerceSectionCreateManyCommerceInput = {
    id?: number
    ordre: number
    type: $Enums.TypeSection
    contenu: string
    imageUrl?: string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommerceGalerieUpdateWithoutCommerceInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommerceGalerieUncheckedUpdateWithoutCommerceInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommerceGalerieUncheckedUpdateManyWithoutCommerceInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommerceSectionUpdateWithoutCommerceInput = {
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeSectionFieldUpdateOperationsInput | $Enums.TypeSection
    contenu?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommerceSectionUncheckedUpdateWithoutCommerceInput = {
    id?: IntFieldUpdateOperationsInput | number
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeSectionFieldUpdateOperationsInput | $Enums.TypeSection
    contenu?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommerceSectionUncheckedUpdateManyWithoutCommerceInput = {
    id?: IntFieldUpdateOperationsInput | number
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumTypeSectionFieldUpdateOperationsInput | $Enums.TypeSection
    contenu?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}