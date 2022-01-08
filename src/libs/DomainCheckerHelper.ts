import { Domains } from "check-domain-availability";
import _ from "lodash";

export class DomainCheckerHelper {
  public generateDomainIdeas(prefixes: string[], suffixes: string[]): string[] {
    prefixes = _.shuffle(prefixes);
    suffixes = _.shuffle(suffixes);

    const ideas: string[] = [];

    for (const prefix of prefixes) {
      for (const suffix of suffixes) {
        ideas.push(prefix + suffix + ".com");
      }
    }

    return ideas;
  }

  public async findAvailableDomains(ideas: string[]): Promise<string[]> {
    const available: string[] = [];

    for (const idea of ideas) {
      const result = await Domains.find(idea);

      if (result) {
        available.push(idea);
      }
    }

    return available;
  }
}

export const domainCheckerHelper = new DomainCheckerHelper();
