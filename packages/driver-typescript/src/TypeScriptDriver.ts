/**
 * @copyright   2017, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import path from 'path';
import rimraf from 'rimraf';
import { Argv, Driver, DriverContext } from '@beemo/core';
import { TypeScriptConfig } from './types';

// Success: Writes nothing to stdout or stderr
// Failure: Writes to stdout on syntax and type error
export default class TypeScriptDriver extends Driver<TypeScriptConfig> {
  bootstrap() {
    this.setMetadata({
      bin: 'tsc',
      configName: 'tsconfig.json',
      configOption: '',
      description: 'Type check files with TypeScript',
      filterOptions: true,
      title: 'TypeScript',
      workspaceStrategy: 'copy',
    });

    this.setCommandOptions({
      clean: {
        boolean: true,
        default: true,
        description: 'Clean the target folder',
      },
    });

    this.on('typescript.before-execute', this.handleCleanTarget);
  }

  /**
   * Automatically clean the target folder if `outDir` is used.
   */
  handleCleanTarget = (driver: TypeScriptDriver, argv: Argv, { args }: DriverContext) => {
    if (!this.config.compilerOptions) {
      return;
    }

    const { outDir } = this.config.compilerOptions;

    if (args.clean && outDir) {
      rimraf.sync(path.resolve(outDir));
    }
  };
}