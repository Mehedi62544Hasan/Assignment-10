import React from 'react';
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 25,
      textAlign: "center",
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: "justify",
      fontFamily: "Times-Roman",
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    header: {
      fontSize: 40,
      fontWeight: "bold",
      marginBottom: 20,
      textAlign: "center",
      color: "black",
    },
    pageNumber: {
      position: "absolute",
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
    },
  });

const DownloadPdf = ({children}) => {
    return (
      
            <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
         
        </Text>
        <Text style={styles.text}>{children}</Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
           ` ${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  
    );
};

export default DownloadPdf;