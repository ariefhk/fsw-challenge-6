import React from "react";
import { Row, Col, Card, Image, Container } from "react-bootstrap";
import styles from "./index.module.css";

export default function WhyUsComponent() {
  return (
    <Container className={styles.whyus}>
      <h2>Why Us?</h2>
      <p>Mengapa harus pilih Binar Car Rental?</p>
      <Row className="gap-4 gap-lg-0">
        <Col lg={3}>
          <Card className={styles.whyusCard}>
            <Image
              src="./images/ic_check.svg"
              alt="Check Icon"
              srcSet=""
              width="32"
            />
            <h5 className="my-sm-4">Mobil Lengkap</h5>
            <p>
              Tersedia banyak pilihan mobil, kondisi masih baru, bersih <br />{" "}
              dan terawat
            </p>
          </Card>
        </Col>

        <Col lg={3}>
          <Card className={styles.whyusCard}>
            <Image
              src="./images/ic_tag.svg"
              alt="Tag Icon"
              srcSet=""
              width="32"
            />
            <h5 className="my-sm-4">Harga Murah</h5>
            <p>
              Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
              mobil lain
            </p>
          </Card>
        </Col>
        <Col lg={3}>
          <Card className={styles.whyusCard}>
            <Image
              src="./images/ic_blue_check.svg"
              alt="Blue Check Icon"
              srcSet=""
              width="32"
            />
            <h5 className="my-sm-4">Layanan 24 Jam</h5>
            <p>
              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
              tersedia di akhir minggu
            </p>
          </Card>
        </Col>

        <Col lg={3}>
          <Card className={styles.whyusCard}>
            <Image
              src="./images/ic_medal.svg"
              alt="Medal icon"
              srcSet=""
              width="32"
            />
            <h5 className="my-sm-4">Sopir Profesional</h5>
            <p>
              Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
              tepat waktu
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}