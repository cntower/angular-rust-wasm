export interface ActionWorker {
  readonly type: string;
}

export interface ActionText extends ActionWorker {
  readonly text: string;
}
