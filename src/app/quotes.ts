export class Quote {
  public showDescription: boolean;
  constructor(public quote: string, public author: string, public submittedBy: string, public submissionDate: Date) {
    this.showDescription = false;
  }
}
