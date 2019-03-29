
import { ResolverFactory } from 'enhanced-resolve'

declare function resolver(config: ResolverFactory.ResolverOption): Function;

declare module 'postcss-import-resolver' {
  export = resolver;
}
