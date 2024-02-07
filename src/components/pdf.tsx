import {
  PDFDownloadLink,
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { studentTableHead } from "../constants/table";
import { useRef } from "react";

interface IDocumentProps {
  documentData: any;
}

const kpoo =
  "https://res.cloudinary.com/omniswift/image/upload/v1648473802/wqouqp73otvvjmkkekkj.png";
// Define your React component for the UI design
const MyPDFDocument = ({ documentData }: IDocumentProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* header section */}
      <View style={styles.topDetails}>
        <Image
          // src={kpoo}
          // alt="logo"
          // className={styles.result__l

          style={styles.photos}
          source={kpoo}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Text style={{ fontSize: 16 }}>FREMONT COLLEGE OF EDUCATION</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 12 }}>
              No.5 Raymond Osuman Street, PMB 2191
            </Text>

            <Text style={{ fontSize: 12 }}>Maitama, Abuja, Nigeria.</Text>
          </View>
          <Text style={{ fontSize: 18 }}>
            Post Graduate Diploma in Education
          </Text>
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>
            Student First Semester Statement Of Result
          </Text>
        </View>
        <Image
          src="https://res.cloudinary.com/omniswift/image/upload/v1648473914/tc4kvpfeocqkyhj560fc.png"
          style={styles.photos}
        />
      </View>

      {/* student details section */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <View
          style={{
            maxWidth: 200,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: 700, fontSize: 12 }}>Name:</Text>
            <Text style={{ fontSize: 12 }}>{documentData?.firstname}</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
            <Text style={{ fontWeight: 700, fontSize: 12 }}>Level:</Text>
            <Text style={{ fontSize: 12 }}>loo</Text>
          </View>
        </View>

        <View
          style={{
            maxWidth: 250,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text style={{ fontWeight: 700, fontSize: 12 }}>Reg No:</Text>
            <Text style={{ fontSize: 12 }}>2002/skwkwk</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
            <Text style={{ fontWeight: 700, fontSize: 12 }}>Session:</Text>
            <Text style={{ fontSize: 12 }}>loo</Text>
          </View>
        </View>
      </View>

      {/* Course Table */}
      <View>
        {/* Head */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#0D7590",
            height: 40,
            justifyContent: "space-between",
            gap: 5,
          }}
        >
          <Text style={styles.tableColumnSize}>S/N</Text>
          <Text style={styles.tableColumnSize}>loo</Text>
          <Text style={styles.tableColumnSize}>kww</Text>
          <Text style={styles.tableColumnSize}>fual</Text>
          <Text style={styles.tableColumnSize}>soo</Text>
          <Text style={styles.tableColumnSize}>gooo</Text>
        </View>

        {/* Body */}
        <View>
          {studentTableHead.map((item, index) => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: index % 2 === 0 ? "#F2F2F2" : "white",
                height: 40,
                justifyContent: "space-between",
                gap: 5,
              }}
            >
              <Text style={[styles.tableColumnSize]}>{item.Header}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* UNTS GPTS Table */}
      <View style={{ maxWidth: "65%" }}>
        {/* Head */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#0D7590",
            height: 40,
            justifyContent: "space-between",
            gap: 5,
          }}
        >
          <Text style={styles.tableColumnSize2}>UNTS</Text>
          <Text style={styles.tableColumnSize2}>UNTD</Text>
          <Text style={styles.tableColumnSize2}>GPTS</Text>
          <Text style={styles.tableColumnSize2}>GPTD</Text>
          <Text style={styles.tableColumnSize2}>GPATS</Text>
          <Text style={styles.tableColumnSize2}>GPATD</Text>
        </View>

        {/* Body */}
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#F2F2F2",
              height: 40,
              justifyContent: "space-between",
              gap: 5,
            }}
          >
            <Text style={[styles.tableColumnSize]}>yaw</Text>
          </View>
        </View>
      </View>

      {/* Remarks */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 10,
          maxWidth: 120,
          width: "100%",
        }}
      >
        <Text style={{ fontWeight: 700, fontSize: 12 }}>Remarks:</Text>
        <Text style={{ fontSize: 12, color: "#0D7590" }}>2002/skwkwk</Text>
      </View>

      {/* Sign Registrar */}
      <View style={{ marginTop: 40 }}>
        <Text>_________________________</Text>
        <Text style={{ fontSize: 13, marginTop: 7 }}>Registrar</Text>
      </View>
    </Page>
  </Document>
);

interface IPDF {
  data: any;
  handleClick: () => void;
}

// Render the PDF using react-pdf
const MyPDFViewer = ({ handleClick, data }: IPDF) => {
  return (
    <div className="h-full">
      <PDFDownloadLink
        document={<MyPDFDocument documentData={data} />}
        fileName="ui_design.pdf"
        onClick={handleClick}
      >
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download PDF"
        }
      </PDFDownloadLink>
      {/* <PDFViewer className="w-full min-h-[100vh]">
      <MyPDFDocument />
    </PDFViewer> */}
    </div>
  );
};

// Export the PDF viewer component
export default MyPDFViewer;

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    width: "100%",
    padding: 20,
  },
  topDetails: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
  },
  photos: {
    width: 100,
    height: 100,
  },
  tableColumnSize: {
    maxWidth: 80,
    width: "100%",
    backgroundColor: "red",
    fontSize: 12,
    textAlign: "center",
    color: "white",
  },
  tableColumnSize2: {
    maxWidth: 50,
    width: "100%",
    backgroundColor: "red",
    fontSize: 12,
    textAlign: "center",
    color: "white",
  },
});
