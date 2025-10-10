import { databaseManager } from "../../libs/databaseManager";
import { comparePassword } from "../../libs/hash";
import { generateJWT, JwtPayload } from "../../libs/jwt";

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    address: string;
    phone: string;
  };
}

export async function loginUserUseCase(
  credentials: LoginCredentials,
): Promise<LoginResponse> {
  const database = databaseManager.getDatabase();
  const user = await database.user.findUnique({
    where: {
      email: credentials.email,
    },
  });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isPasswordValid = await comparePassword(
    credentials.password,
    user.password,
  );

  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

  const payload: JwtPayload = {
    id: user.id,
    email: user.email,
    name: user.name,
  };

  const token = await generateJWT(payload);

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      address: user.address,
      phone: user.phone,
    },
  };
}
