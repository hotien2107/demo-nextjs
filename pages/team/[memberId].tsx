import Head from "next/head";
import { useRouter } from "next/router";
import { memberList } from "../../dummy_data";

const Tien = () => {
  const router = useRouter();
  const { memberId } = router.query;

  const member = memberList.find((member) => member.id === memberId);

  return (
    <>
      <Head>
        <title>Tien</title>
      </Head>
      <button
        onClick={() => {
          router.push("./");
        }}
      >
        Home
      </button>
      <h1>{member?.name}</h1>
    </>
  );
};

export default Tien;
