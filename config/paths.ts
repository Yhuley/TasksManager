import * as path from 'path';

type Paths = {
  root: string;
  src: string;
  app: string;
  ui: string;
  data: string;
  nodeModules: string;
};

const paths = {} as Paths;
paths.root = path.resolve(__dirname, '..');
paths.nodeModules = path.join(paths.root, 'node_modules');
paths.src = path.join(paths.root, 'src');
paths.app = path.join(paths.src, 'app');
paths.ui = path.join(paths.src, 'ui');
paths.data = path.join(paths.src, 'data');

export const alias = {
  '@ui': paths.ui,
  '@data': paths.data,
  '@app': paths.app,
};

export default paths;
