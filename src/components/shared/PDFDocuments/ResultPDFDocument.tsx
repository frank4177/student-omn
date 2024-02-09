import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { ResultsDocType } from "./typesPDFDoc";

interface IDocumentProps {
  documentData: ResultsDocType;
}

export const ResultPDFDocument = ({ documentData }: IDocumentProps) => {
  console.log(documentData?.data?.firstname);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* header section */}
        <View style={styles.topDetails}>
          <Image style={styles.photos} source={documentData?.logo} />
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
                gap: 3,
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
          <Image src={documentData?.profile_picture} style={styles.photos} />
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
              maxWidth: 140,
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
              <Text style={{ fontWeight: "bold", fontSize: 12 }}>Name:</Text>
              <View style={{ textAlign: "left", width: "65%" }}>
                <Text style={{ fontSize: 12 }}>
                  {" "}
                  {documentData?.data?.firstname +
                    " " +
                    documentData?.data?.surname}
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 5,
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 12 }}>Level:</Text>
              <View style={{ textAlign: "left", width: "65%" }}>
                <Text style={{ fontSize: 12 }}>
                  {documentData?.data?.level}
                </Text>
              </View>
            </View>
          </View>

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
                width: "100%",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 12 }}>Reg No:</Text>
              <View style={{ textAlign: "left", width: "65%" }}>
                <Text style={{ fontSize: 12 }}>
                  {documentData?.data?.reg_no}
                </Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 5,
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 12 }}>Session:</Text>
              <View style={{ textAlign: "left", width: "65%" }}>
                <Text style={{ fontSize: 12 }}>
                  {documentData?.data?.session}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Course Table section */}
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
            <Text style={[styles.tableColumnSize, { color: "white", marginLeft:10 }]}>
              S/N
            </Text>
            <Text
              style={{
                maxWidth: 80,
                width: "100%",
                fontSize: 12,
                textAlign: "left",
                color: "white",
              }}
            >
              Course Code
            </Text>
            <Text
              style={{
                maxWidth: 200,
                width: "100%",
                fontSize: 12,
                textAlign: "left",
                color: "white",
              }}
            >
              Course Title
            </Text>
            <Text style={[styles.tableColumnSize, { color: "white", textAlign:"center" }]}>
              Unit
            </Text>
            <Text style={[styles.tableColumnSize, { color: "white", textAlign:"center" }]}>
              Grade
            </Text>
            <Text
              style={{
                maxWidth: 65,
                width: "100%",
                fontSize: 12,
                textAlign: "center",
                color: "white",
              }}
            >
              Total Point
            </Text>
          </View>

          {/* Body */}
          <View>
            {documentData?.data?.result.map((item: any, index: number) => (
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
                key={index}
              >
                <Text style={[styles.tableColumnSize, { color: "black", marginLeft:10 }]}>
                  {index + 1}.
                </Text>
                <Text
                  style={{
                    maxWidth: 80,
                    width: "100%",
                    fontSize: 12,
                    textAlign: "left",
                    color: "black",
                  }}
                >
                  {item.coursecode}
                </Text>
                <Text
                  style={{
                    maxWidth: 200,
                    width: "100%",
                    fontSize: 12,
                    textAlign: "left",
                    color: "black",
                  }}
                >
                  {item.title}
                </Text>
                <Text style={[styles.tableColumnSize, { color: "black", textAlign:"center" }]}>
                  {item.credit_unit}
                </Text>
                <Text style={[styles.tableColumnSize, { color: "black", textAlign:"center" }]}>
                  {item.grade}
                </Text>
                <Text
                  style={{
                    maxWidth: 60,
                    width: "100%",
                    fontSize: 12,
                    textAlign: "center",
                    color: "black",
                  }}
                >
                  {item.total_point}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* UNTS GPTS Table section*/}
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
            <Text style={[styles.tableColumnSize2, { color: "white" }]}>
              UNTS
            </Text>
            <Text style={[styles.tableColumnSize2, { color: "white" }]}>
              UNTD
            </Text>
            <Text style={[styles.tableColumnSize2, { color: "white" }]}>
              GPTS
            </Text>
            <Text style={[styles.tableColumnSize2, { color: "white" }]}>
              GPTD
            </Text>
            <Text style={[styles.tableColumnSize2, { color: "white" }]}>
              GPATS
            </Text>
            <Text style={[styles.tableColumnSize2, { color: "white" }]}>
              GPATD
            </Text>
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
              <Text style={[styles.tableColumnSize2, { color: "black" }]}>
                {documentData?.data?.cummulative?.unts}
              </Text>
              <Text style={[styles.tableColumnSize2, { color: "black" }]}>
                {documentData?.data?.cummulative?.untd}
              </Text>
              <Text style={[styles.tableColumnSize2, { color: "black" }]}>
                {documentData?.data?.cummulative?.gpts}
              </Text>
              <Text style={[styles.tableColumnSize2, { color: "black" }]}>
                {documentData?.data?.cummulative?.gptd}
              </Text>
              <Text style={[styles.tableColumnSize2, { color: "black" }]}>
                {documentData?.data?.cummulative?.gpats}
              </Text>
              <Text style={[styles.tableColumnSize2, { color: "black" }]}>
                {documentData?.data?.cummulative?.gpatd}
              </Text>
            </View>
          </View>
        </View>

        {/* Remarks section */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 5,
            maxWidth: 90,
            width: "100%",
          }}
        >
          <Text style={{ fontWeight: 700, fontSize: 12 }}>Remarks:</Text>
          <Text style={{ fontSize: 12, color: "#0D7590" }}>
            {documentData?.data?.cummulative?.remarks}
          </Text>
        </View>

        {/* Sign Registrar section*/}
        <View style={{ marginTop: 60 }}>
          <Text>_________________________</Text>
          <Text style={{ fontSize: 13, marginTop: 7 }}>Registrar</Text>
        </View>
      </Page>
    </Document>
  );
};

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    width: "100%",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 40,
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
    maxWidth: 40,
    width: "100%",
    fontSize: 12,
    textAlign: "left",
  },
  tableColumnSize2: {
    maxWidth: 50,
    width: "100%",
    fontSize: 12,
    textAlign: "center",
  },
});
