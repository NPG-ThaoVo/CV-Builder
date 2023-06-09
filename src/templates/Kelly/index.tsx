import { TemplateProps } from 'templates';
import styles from './index.module.scss';
import { getMonthYear } from 'utils/date';
import { serializeSlateToHtml } from 'utils/slate';

const Kelly = (props: TemplateProps) => {
    const { about, contact, sections, avatar } = props.data;

    const tags = sections.filter((s) => s.type === 'TAG').sort((a, b) => a.order - b.order);
    const standards = sections.filter((s) => s.type === 'STANDARD').sort((a, b) => a.order - b.order);

    return (
        <>
            <div className={styles['container']}>
                <div className={styles['container__infomation']}>
                    <div className={styles['container__name']}>
                        <p>{`${about.firstName} ${about.lastName}`}</p>
                        <span>{about.title}</span>
                    </div>
                    <div className={styles['container__infomation--items']}>
                        <img className={styles['avatar-img']} src={avatar} alt="" />
                        {standards.map((s) => (
                            <div className={styles['list-items']} key={s.id}>
                                <div className={styles['list-items__title']}>
                                    <h2 className={styles['list-items__title--type']}>{s.heading}</h2>
                                </div>
                                {[...s.standards]
                                    .sort((a, b) => a.order - b.order)
                                    .map((item, index) => (
                                        <div className={styles['list-items__sub']} key={index}>
                                            <div className={styles['list-items__sub--icon']}></div>
                                            <div className={styles['list-items__sub--title']}>
                                                <div className={styles['title-since']}>
                                                    <p className={styles['title-since__input']}>
                                                        <span className={styles['title-since__input--from']}>
                                                            {getMonthYear(item.start)}
                                                        </span>
                                                        -
                                                        <span className={styles['title-since__input--to']}>
                                                            {item.current ? 'Current' : getMonthYear(item.stop)}
                                                        </span>
                                                    </p>
                                                    <p className={styles['title-since__name']}>{item.name}</p>
                                                </div>
                                            </div>
                                            <div className={styles['list-items__sub--more']}>
                                                <div className={styles['more-title']}>{item.title}</div>
                                                <div
                                                    className={styles['more-sub']}
                                                    dangerouslySetInnerHTML={{
                                                        __html: serializeSlateToHtml(item.description),
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        ))}
                    </div>
                    <div className={styles['container__infomation--footer']}></div>
                </div>
                <div className={styles['container__more']}>
                    <div className={styles['more-header']}>
                        <div className={styles['more-contact']}>
                            <div className={styles['more-contact__title']}>
                                <div>contact me</div>
                            </div>
                            <div className={styles['more-contact__info']}>
                                <div className={styles['more-contact__info--icon']}>
                                    <svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 230 230"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M182.267 85.9126C182.267 49.0084 152.35 19.0917 115.446 19.0917C78.5417 19.0917 48.6251 49.0084 48.6251 85.9126C48.6251 99.1527 52.5389 111.467 59.1732 121.853H59.0969C81.6251 157.125 115.446 210.009 115.446 210.009L171.795 121.853H171.728C178.353 111.467 182.267 99.1527 182.267 85.9126ZM115.446 114.55C99.6285 114.55 86.8084 101.73 86.8084 85.9126C86.8084 70.0952 99.6285 57.2751 115.446 57.2751C131.263 57.2751 144.084 70.0952 144.084 85.9126C144.084 101.73 131.263 114.55 115.446 114.55Z"
                                            style={{ fill: 'var(--monogramBackground)' }}
                                        />
                                    </svg>
                                </div>
                                <div className={styles['more-contact__info--input']}>
                                    <p className={styles['input-name']}>address</p>
                                    <span className={styles['input-sub']}>{`${contact.city} ${contact.state}`}</span>
                                </div>
                            </div>
                            <div className={styles['more-contact__info']}>
                                <div className={styles['more-contact__info--icon']}>
                                    <svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 244 244"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M121.55 236.483C184.814 236.483 236.1 185.197 236.1 121.933C236.1 58.6682 184.814 7.38234 121.55 7.38234C58.2859 7.38234 7 58.6682 7 121.933C7 185.197 58.2859 236.483 121.55 236.483Z"
                                            stroke-width="13.8234"
                                        />
                                        <path
                                            d="M121.55 6C138.307 20.6406 151.763 38.6744 161.025 58.9071C170.287 79.1397 175.145 101.109 175.277 123.361C175.277 197.961 141.732 220.125 121.55 235.054"
                                            stroke-width="13.8234"
                                        />
                                        <path
                                            d="M121.55 6C104.768 20.6279 91.2866 38.6561 82.0001 58.8894C72.7136 79.1227 67.834 101.099 67.6849 123.361C67.6849 197.961 101.23 220.125 121.412 235.054"
                                            stroke-width="13.8234"
                                        />
                                        <path d="M21.8833 65.4868H221.77" stroke-width="13.8234" />
                                        <path d="M121.55 6V235.054" stroke-width="13.8234" />
                                        <path d="M25.0165 183.355H218.222" stroke-width="13.8234" />
                                        <path d="M7 123.361L236.1 120.504" stroke-width="13.8234" />
                                    </svg>
                                </div>
                                <div className={styles['more-contact__info--input']}>
                                    <p className={styles['input-name']}>web</p>
                                    <span className={styles['input-sub']}>{contact.email}</span>
                                </div>
                            </div>
                            <div className={styles['more-contact__info']}>
                                <div className={styles['more-contact__info--icon']}>
                                    <svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 230 230"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M166.098 210.009C127.125 209.958 89.7626 194.454 62.2046 166.896C34.6465 139.338 19.1422 101.976 19.0917 63.0026C19.0917 51.3567 23.718 40.1878 31.9529 31.9529C40.1878 23.718 51.3567 19.0917 63.0026 19.0917C65.4687 19.0729 67.9306 19.2967 70.3529 19.7599C72.6946 20.1064 74.9966 20.6819 77.2259 21.4782C78.7938 22.0283 80.1909 22.9781 81.2792 24.2338C82.3674 25.4894 83.109 27.0074 83.4307 28.6375L96.5085 85.9126C96.861 87.4673 96.8186 89.0855 96.385 90.6195C95.9515 92.1536 95.1407 93.5546 94.0266 94.6948C92.7856 96.0312 92.6902 96.1267 80.9488 102.236C90.3514 122.863 106.849 139.428 127.437 148.915C133.642 137.078 133.737 136.983 135.074 135.742C136.214 134.628 137.615 133.817 139.149 133.384C140.683 132.95 142.301 132.908 143.856 133.26L201.131 146.338C202.709 146.704 204.168 147.466 205.37 148.551C206.573 149.637 207.479 151.01 208.004 152.543C208.81 154.808 209.417 157.14 209.818 159.511C210.202 161.91 210.393 164.336 210.39 166.766C210.214 178.362 205.458 189.418 197.16 197.519C188.861 205.621 177.695 210.111 166.098 210.009Z"
                                            style={{ fill: 'var(--monogramBackground)' }}
                                        />
                                    </svg>
                                </div>
                                <div className={styles['more-contact__info--input']}>
                                    <p className={styles['input-name']}>phone</p>
                                    <p className={styles['input-sub']}>{contact.phone}</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles['more-skills']}>
                            <div className={styles['more-skills__title']}>
                                <div>pro skills</div>
                            </div>
                            <div className={styles['more-skills__content']}>
                                <div className={styles['more-skills__content--items']}>
                                    <p className={styles['content-title']}>illustrator</p>
                                    <div className={styles['content-bar']}>
                                        <div
                                            className={`${styles['content-bar--color']} illustrator`}
                                            style={{ width: '90%' }}
                                        >
                                            90%
                                        </div>
                                    </div>
                                </div>
                                <div className={styles['more-skills__content--items']}>
                                    <p className={styles['content-title']}>photoshop</p>
                                    <div className={styles['content-bar']}>
                                        <div className={styles['content-bar--color']} style={{ width: '60%' }}>
                                            60%
                                        </div>
                                    </div>
                                </div>
                                <div className={styles['more-skills__content--items']}>
                                    <p className={styles['content-title']}>indesign</p>
                                    <div className={styles['content-bar']}>
                                        <div className={styles['content-bar--color']} style={{ width: '80%' }}>
                                            80%
                                        </div>
                                    </div>
                                </div>
                                <div className={styles['more-skills__content--items']}>
                                    <p className={styles['content-title']}>ms word</p>
                                    <div className={styles['content-bar']}>
                                        <div className={styles['content-bar--color']} style={{ width: '98%' }}>
                                            98%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['more-footer']}>
                        <div className={styles['more-footer__items']}>
                            <div className={styles['more-footer__items--icon']}>
                                <svg
                                    width="34"
                                    height="34"
                                    viewBox="0 0 227 228"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M66.7344 1.36442C78.827 0.810154 82.6816 0.684212 113.474 0.684212C144.272 0.684212 148.12 0.81644 160.206 1.36442C172.28 1.9124 180.525 3.83338 187.736 6.63605C195.3 9.48377 202.151 13.9456 207.815 19.7112C213.581 25.3738 218.044 32.226 220.89 39.79C223.693 47.0015 225.607 55.246 226.162 67.3133C226.716 79.406 226.842 83.2605 226.842 114.053C226.842 144.845 226.71 148.699 226.162 160.792C225.614 172.859 223.693 181.104 220.89 188.315C217.993 195.767 214.113 202.096 207.815 208.394C202.153 214.16 195.3 218.623 187.736 221.469C180.525 224.271 172.28 226.186 160.213 226.741C148.12 227.295 144.266 227.421 113.474 227.421C82.6816 227.421 78.827 227.289 66.7344 226.741C54.667 226.193 46.4225 224.271 39.2111 221.469C31.7602 218.572 25.4305 214.692 19.1323 208.394C13.3656 202.731 8.90347 195.879 6.0571 188.315C3.25442 181.104 1.33973 172.859 0.785465 160.792C0.231197 148.699 0.105255 144.851 0.105255 114.053C0.105255 83.2542 0.237484 79.406 0.785465 67.3197C1.33345 55.246 3.25442 47.0015 6.0571 39.79C8.90481 32.2265 13.3667 25.3746 19.1323 19.7112C24.7947 13.9446 31.6469 9.48243 39.2111 6.63605C46.4225 3.83338 54.667 1.91869 66.7344 1.36442ZM159.287 21.7707C147.333 21.229 143.743 21.1094 113.474 21.1094C83.2043 21.1094 79.6143 21.229 67.6603 21.7707C56.6068 22.2746 50.6046 24.1199 46.6115 25.6757C41.321 27.7289 37.542 30.1851 33.5741 34.153C29.6126 38.1209 27.1499 41.8999 25.0967 47.1904C23.541 51.1836 21.6957 57.1858 21.1918 68.2392C20.6501 80.1933 20.5304 83.7833 20.5304 114.053C20.5304 144.322 20.6501 147.912 21.1918 159.866C21.6957 170.919 23.541 176.922 25.0967 180.915C26.9129 185.84 29.8097 190.294 33.5741 193.953C37.2318 197.716 41.6868 200.614 46.6115 202.429C50.6046 203.986 56.6068 205.831 67.6603 206.335C79.6143 206.877 83.198 206.996 113.474 206.996C143.749 206.996 147.333 206.877 159.287 206.335C170.34 205.831 176.343 203.986 180.336 202.429C185.626 200.377 189.406 197.921 193.374 193.953C197.138 190.295 200.035 185.84 201.851 180.915C203.407 176.922 205.252 170.919 205.756 159.866C206.298 147.912 206.417 144.322 206.417 114.053C206.417 83.7833 206.298 80.1933 205.756 68.2392C205.252 57.1858 203.407 51.1836 201.851 47.1904C199.798 41.8999 197.342 38.1209 193.374 34.153C189.406 30.1915 185.626 27.7289 180.336 25.6757C176.343 24.1199 170.34 22.2746 159.287 21.7707ZM98.9986 149C103.588 150.901 108.506 151.88 113.474 151.88C123.507 151.88 133.128 147.894 140.221 140.8C147.316 133.707 151.302 124.085 151.302 114.053C151.302 104.021 147.316 94.3987 140.221 87.3047C133.128 80.2107 123.507 76.2253 113.474 76.2253C108.506 76.2253 103.588 77.2038 98.9986 79.1048C94.4082 81.0057 90.2386 83.792 86.726 87.3047C83.2135 90.8173 80.4271 94.9872 78.5261 99.5765C76.6251 104.166 75.6468 109.085 75.6468 114.053C75.6468 119.02 76.6251 123.939 78.5261 128.529C80.4271 133.118 83.2135 137.288 86.726 140.8C90.2386 144.313 94.4082 147.1 98.9986 149ZM72.2699 72.8485C83.1979 61.9205 98.0195 55.7812 113.474 55.7812C128.929 55.7812 143.75 61.9205 154.678 72.8485C165.606 83.7765 171.745 98.5985 171.745 114.053C171.745 129.507 165.606 144.328 154.678 155.257C143.75 166.185 128.929 172.324 113.474 172.324C98.0195 172.324 83.1979 166.185 72.2699 155.257C61.3419 144.328 55.2026 129.507 55.2026 114.053C55.2026 98.5985 61.3419 83.7765 72.2699 72.8485ZM184.666 64.463C187.249 61.8798 188.7 58.3763 188.7 54.7231C188.7 51.0699 187.249 47.5664 184.666 44.9832C182.082 42.4001 178.579 40.9489 174.926 40.9489C171.273 40.9489 167.769 42.4001 165.186 44.9832C162.602 47.5664 161.151 51.0699 161.151 54.7231C161.151 58.3763 162.602 61.8798 165.186 64.463C167.769 67.0462 171.273 68.4974 174.926 68.4974C178.579 68.4974 182.082 67.0462 184.666 64.463Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                            <div className={styles['more-footer__items--icon']}>
                                <svg
                                    width="34"
                                    height="34"
                                    viewBox="0 0 227 185"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M226.305 21.958C217.965 25.6142 209.037 28.1295 199.628 29.2703C209.229 23.5098 216.569 14.3978 220.069 3.54276C211.064 8.78605 201.101 12.5839 190.509 14.7308C182.063 5.68968 169.989 0 156.59 0C130.905 0 110.088 20.8102 110.088 46.4598C110.088 50.1514 110.534 53.6941 111.307 57.0527C72.6692 55.2459 38.4177 36.6818 15.5102 8.63726C11.4856 15.4677 9.19701 23.4035 9.19701 32.0407C9.19701 48.2028 17.4233 62.3739 29.8584 70.7065C22.2556 70.4868 15.0993 68.3824 8.82857 64.9176V65.4773C8.82857 88.0164 24.8419 106.807 46.0984 111.087C42.2227 112.114 38.0847 112.709 33.883 112.709C30.9 112.709 28.0516 112.419 25.2103 111.895C31.1905 130.345 48.3091 143.78 68.7154 144.183C52.8509 156.618 32.7422 164.03 11.0747 164.03C7.38312 164.03 3.69864 163.853 0 163.406C20.6685 176.585 45.0639 184.295 71.415 184.295C156.916 184.295 203.638 113.475 203.638 52.1424C203.638 50.1868 203.638 48.1958 203.489 46.1976C212.608 39.7002 220.502 31.4668 226.737 22.1352L226.305 21.958Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                            <div className={styles['more-footer__items--icon']}>
                                <svg
                                    width="34"
                                    height="34"
                                    viewBox="0 0 227 240"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M201.168 23.2833C195.237 17.8199 171.236 0.402648 117.723 0.169172C117.723 0.169172 54.6382 -3.61313 23.9128 24.5907C6.82234 41.6812 0.798665 66.7565 0.144933 97.8087C-0.508799 128.861 -1.30262 187.043 54.7783 202.826H54.825L54.7783 226.921C54.7783 226.921 54.4047 236.68 60.8486 238.641C68.6 241.069 73.1761 233.645 80.6007 225.66C84.6631 221.271 90.2666 214.827 94.5158 209.924C132.899 213.146 162.364 205.768 165.726 204.694C173.477 202.172 217.324 196.569 224.422 138.387C231.8 78.3368 220.873 40.4204 201.168 23.2833ZM207.658 133.997C201.634 182.56 166.099 185.642 159.562 187.744C156.76 188.631 130.845 195.075 98.2981 192.973C98.2981 192.973 74.0167 222.251 66.452 229.863C63.9772 232.337 61.2689 232.104 61.3156 227.201C61.3156 223.979 61.5024 187.183 61.5024 187.183C61.4557 187.183 61.4557 187.183 61.5024 187.183C13.9667 174.015 16.7684 124.472 17.2821 98.5558C17.7957 72.64 22.6987 51.3937 37.1742 37.105C63.1834 13.524 116.743 17.0261 116.743 17.0261C161.99 17.2129 183.657 30.8479 188.7 35.424C205.37 49.7127 213.869 83.8936 207.658 133.997ZM142.752 96.2678C142.939 100.284 136.915 100.564 136.728 96.548C136.215 86.275 131.405 81.2786 121.506 80.7183C117.49 80.4848 117.863 74.4612 121.832 74.6946C134.86 75.3951 142.098 82.8663 142.752 96.2678ZM152.231 101.544C152.698 81.7456 140.324 66.2428 116.836 64.5151C112.867 64.2349 113.287 58.2112 117.256 58.4914C144.34 60.4526 158.768 79.084 158.255 101.684C158.208 105.7 152.138 105.513 152.231 101.544ZM174.178 107.801C174.224 111.817 168.154 111.864 168.154 107.848C167.874 69.7916 142.518 49.059 111.746 48.8255C107.777 48.7788 107.777 42.8018 111.746 42.8018C146.161 43.0353 173.851 66.8031 174.178 107.801ZM168.901 153.609V153.703C163.858 162.575 154.426 172.381 144.713 169.252L144.62 169.112C134.767 166.357 111.56 154.403 96.8973 142.729C89.3327 136.752 82.4218 129.701 77.0985 122.931C72.2889 116.907 67.4326 109.763 62.7164 101.171C52.7704 83.1931 50.5757 75.1616 50.5757 75.1616C47.4471 65.449 57.2064 56.0166 66.1252 50.9735H66.2186C70.5145 48.7321 74.6237 49.4792 77.3787 52.7946C77.3787 52.7946 83.1689 59.7055 85.6437 63.1142C87.9785 66.2895 91.1071 71.3793 92.7414 74.2277C95.5898 79.3174 93.8154 84.5006 91.0137 86.6486L85.4103 91.1313C82.5619 93.4194 82.9354 97.6686 82.9354 97.6686C82.9354 97.6686 91.2472 129.094 122.299 137.033C122.299 137.033 126.549 137.406 128.837 134.558L133.32 128.954C135.467 126.153 140.651 124.378 145.74 127.227C152.605 131.102 161.337 137.126 167.127 142.589C170.395 145.251 171.143 149.313 168.901 153.609Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Kelly;
