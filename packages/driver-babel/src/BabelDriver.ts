import rimraf from 'rimraf';
import { Driver, DriverContext, ExecutionError, Path } from '@beemo/core';
import { BabelConfig } from './types';

// Success: Writes file list to stdout
// Failure: Throws SyntaxError to stderr
export default class BabelDriver extends Driver<BabelConfig> {
  name = '@beemo/driver-babel';

  bootstrap() {
    this.setMetadata({
      bin: 'babel',
      configName: 'babel.config.js',
      configOption: '--config-file',
      description: this.tool.msg('app:babelDescription'),
      title: 'Babel',
      watchOptions: ['-w', '--watch'],
    });

    this.setCommandOptions({
      clean: {
        default: false,
        description: this.tool.msg('app:babelCleanOption'),
        type: 'boolean',
      },
    });

    this.onBeforeExecute.listen(this.handleCleanTarget);
  }

  extractErrorMessage(error: ExecutionError): string {
    if (error.message.includes('SyntaxError')) {
      return error.message.split(/|\s+at/u, 1)[0];
    }

    return super.extractErrorMessage(error);
  }

  /**
   * Automatically clean the target folder if --out-dir is used.
   */
  private handleCleanTarget = (context: DriverContext) => {
    const outDir = context.getRiskyOption('outDir');

    if (context.getRiskyOption('clean') !== null && typeof outDir === 'string' && outDir) {
      rimraf.sync(Path.resolve(outDir).path());
    }

    return Promise.resolve();
  };
}
