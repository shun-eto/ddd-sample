export abstract class Specification<Criteria> {
  abstract isSatisfiedBy(criteria: Criteria): Promise<boolean>;
}
