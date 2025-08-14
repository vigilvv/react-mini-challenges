export async function mockSubmit({
  name,
  email,
  agreeTOS,
}: {
  name: string;
  email: string;
  agreeTOS: boolean;
}) {
  return new Promise((resolve) => {
    setTimeout(() => {
      alert(`Name: ${name}. Email: ${email}. Agree TOS: ${agreeTOS}`);
      resolve({ success: true });
    }, 1000);
  });
}
