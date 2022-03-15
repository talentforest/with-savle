import "react-loading-skeleton/dist/skeleton.css";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { fetchGetVote } from "src/api/vote";
import useSWR, { SWRConfig } from "swr";

import Seo from "@/components/common/Seo";
import SkeletonBox from "@/components/vote/SkeletonBox";
import VoteBox from "@/components/vote/VoteBox";
import style from "@/styles/vote/VoteIndex.module.scss";

const fetcher = (server) => axios.get(server).then((r) => r.data);

export const vote_address = "/api/vote";

export default function Vote({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <Votelist />
    </SWRConfig>
  );
}

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getStaticProps() {
  const response = await fetchGetVote();
  return {
    props: {
      fallback: {
        "/api/vote": response.data.results,
      },
    },
  };
}
function Votelist() {
  const {
    data: { results: data },
  } = useSWR(vote_address, fetcher, {
    revalidateOnFocus: false,
  });

  return (
    <>
      <Seo
        title={"고민해결소 | 쉽고 FUN한 저축, 세이블"}
        keyword={("고민해결소", "고민투표")}
        desc={
          "저축러의 고민해결소. 저축에 관한 고민을 나누고 투표하며 함께 고민을 해결해요."
        }
        ogUrl={`https://savle.net/vote`}
        ogTitle={"저축러의 고민해결소"}
        ogDesc={"저축에 관한 고민을 나누고 투표하며 함께 고민을 해결해요."}
      />
      <section className={style.banner_box_container}>
        <h1 className={style.banner_box_title}>저축러의 고민해결소</h1>
        <p className={style.banner_box_sub}>
          저축에 관한 고민을 나누고
          <br />
          투표하며 함께 고민을 해결해요.
        </p>
        <div className={style.img_character_money} width={82} height={67}>
          <Image
            className={style.character_money}
            layout="responsive"
            src="/img/char.svg"
            alt="character"
            width={82}
            height={67}
            priority={true}
          />
        </div>
      </section>
      <section className={style.vote_box_list}>
        <ul className={style.vote_box_list_container}>
          {data &&
            data.map((voteBoxData) => (
              <li key={voteBoxData.id}>
                <Link href={`/vote/${voteBoxData.id}`}>
                  <a className={style.link}>
                    <VoteBox voteBoxData={voteBoxData} />
                  </a>
                </Link>
              </li>
            ))}
        </ul>
        <div className={style.loading_page}>
          {!data &&
            [1, 2, 3, 4, 5, 6].map((item, index) => (
              <SkeletonBox key={index} />
            ))}
        </div>
      </section>
    </>
  );
}
