import { UserDataBuilder } from "@/users/domain/testing/helpers/user-data-builder";
import { UserEntity, UserProps } from "../../user.entity";
import { EntityValidationError } from "@/shared/domain/errors/validation-error";

describe("UserEntity integration tests", () => {
  describe("Constructor method", () => {
    it("Should throw an error when creating a user with invalid name", () => {
      let props: UserProps = {
        ...UserDataBuilder({}),
        name: null as unknown as string,
      }
      expect(() => new UserEntity(props)).toThrow(EntityValidationError);

      props = {
        ...UserDataBuilder({}),
        name: '',
      }
      expect(() => new UserEntity(props)).toThrow(EntityValidationError);

      props = {
        ...UserDataBuilder({}),
        name: 10 as unknown as string,
      }
      expect(() => new UserEntity(props)).toThrow(EntityValidationError);

      props = {
        ...UserDataBuilder({}),
        name: 'a'.repeat(256),
      }
      expect(() => new UserEntity(props)).toThrow(EntityValidationError);
    });

    it("Should throw an error when creating a user with invalid email", () => {
      let props: UserProps = {
        ...UserDataBuilder({}),
        email: null as unknown as string,
      }
      expect(() => new UserEntity(props)).toThrow(EntityValidationError);

      props = {
        ...UserDataBuilder({}),
        email: '',
      }
      expect(() => new UserEntity(props)).toThrow(EntityValidationError);

      props = {
        ...UserDataBuilder({}),
        email: 10 as unknown as string,
      }
      expect(() => new UserEntity(props)).toThrow(EntityValidationError);

      props = {
        ...UserDataBuilder({}),
        email: 'a'.repeat(256),
      }
      expect(() => new UserEntity(props)).toThrow(EntityValidationError);
    });

    it("Should throw an error when creating a user with invalid password", () => {
      let props: UserProps = {
        ...UserDataBuilder({}),
        password: null as unknown as string,
      }
      expect(() => new UserEntity(props)).toThrow(EntityValidationError);

      props = {
        ...UserDataBuilder({}),
        password: '',
      }
      expect(() => new UserEntity(props)).toThrow(EntityValidationError);

      props = {
        ...UserDataBuilder({}),
        password: 10 as unknown as string,
      }
      expect(() => new UserEntity(props)).toThrow(EntityValidationError);

      props = {
        ...UserDataBuilder({}),
        password: 'a'.repeat(101),
      }
      expect(() => new UserEntity(props)).toThrow(EntityValidationError);
    });

    it("Should throw an error when creating a user with invalid createdAt", () => {
      let props: UserProps = {
        ...UserDataBuilder({}),
        createdAt: '2023' as unknown as Date,
      }
      expect(() => new UserEntity(props)).toThrow(EntityValidationError);

      props = {
        ...UserDataBuilder({}),
        createdAt: 10 as unknown as Date,
      }
      expect(() => new UserEntity(props)).toThrow(EntityValidationError);
    });
  });
});