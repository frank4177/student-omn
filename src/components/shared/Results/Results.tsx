import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

interface IDocumentProps {
  documentData: any;
}

const kpoo =
  "https://res.cloudinary.com/omniswift/image/upload/v1648473802/wqouqp73otvvjmkkekkj.png";
// Define your React component for the UI design
export const MyPDFDocument = ({ documentData }: IDocumentProps) => {
  console.log(documentData?.data?.firstname);
  return (
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
              maxWidth: 120,
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
              <Text style={{ fontSize: 12 }}>
                {" "}
                {documentData?.data?.firstname +
                  " " +
                  documentData?.data?.surname}
              </Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row", gap: 5, justifyContent:"space-between" }}>
              <Text style={{ fontWeight: 700, fontSize: 12 }}>Level:</Text>
              <Text style={{ fontSize: 12 }}>{documentData?.data?.level}</Text>
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
              <Text style={{ fontWeight: 700, fontSize: 12 }}>Reg No:</Text>
              <Text style={{ fontSize: 12 }}>{documentData?.data?.reg_no}</Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row", gap: 5, justifyContent:"space-between" }}>
              <Text style={{ fontWeight: 700, fontSize: 12 }}>Session:</Text>
              <Text style={{ fontSize: 12 }}>
                {documentData?.data?.session}
              </Text>
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
            <Text style={styles.tableColumnSize}>Course Code</Text>
            <Text style={styles.tableColumnSize}>Course Title</Text>
            <Text style={styles.tableColumnSize}>Unit</Text>
            <Text style={styles.tableColumnSize}>Grade</Text>
            <Text style={styles.tableColumnSize}>Total Point</Text>
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
                <Text style={[styles.tableColumnSize]}>{index + 1}</Text>
                <Text style={[styles.tableColumnSize]}>{item.coursecode}</Text>
                <Text style={[styles.tableColumnSize, {fontSize: 10}]}>{item.title}</Text>
                <Text style={[styles.tableColumnSize]}>{item.credit_unit}</Text>
                <Text style={[styles.tableColumnSize]}>{item.grade}</Text>

                <Text style={[styles.tableColumnSize]}>{item.total_point}</Text>
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
                <Text style={[styles.tableColumnSize2]}>{documentData?.data?.cummulative?.unts}</Text>
                <Text style={[styles.tableColumnSize2]}>{documentData?.data?.cummulative?.untd}</Text>
                <Text style={[styles.tableColumnSize2]}>{documentData?.data?.cummulative?.gpts}</Text>
                <Text style={[styles.tableColumnSize2]}>{documentData?.data?.cummulative?.gptd}</Text>
                <Text style={[styles.tableColumnSize2]}>{documentData?.data?.cummulative?.gpats}</Text>
                <Text style={[styles.tableColumnSize2]}>{documentData?.data?.cummulative?.gpatd}</Text>

              </View>
          </View>
        </View>

        {/* Remarks */}
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
          <Text style={{ fontSize: 12, color: "#0D7590" }}>{documentData?.data?.cummulative?.remarks}</Text>
        </View>

        {/* Sign Registrar */}
        <View style={{ marginTop: 40 }}>
          <Text>_________________________</Text>
          <Text style={{ fontSize: 13, marginTop: 7 }}>Registrar</Text>
        </View>
      </Page>
    </Document>
  );
};

interface IPDF {
  handleClick: () => void;
  // loading?: boolean
}

// Render the PDF using react-pdf
const MyPDFViewer = ({ handleClick}: IPDF) => {



  return (
    <div className="h-full">
      <button className="bg-[#46C35F] h-[40px] w-[150px] text-white" onClick={handleClick}>Download Result</button>

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
    display:"flex",
    flexDirection:"column",
    gap:35,
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
    fontSize: 12,
    textAlign: "center",
    color: "black",
  },
  tableColumnSize2: {
    maxWidth: 50,
    width: "100%",
    fontSize: 12,
    textAlign: "center",
    color: "black",
  },
});
