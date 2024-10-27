// components/receipt/ReceiptDocument.js

import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

// Define styles for PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    margin: 10,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    padding: 5,
  },
  label: {
    width: '40%',
    fontSize: 12,
  },
  value: {
    width: '60%',
    fontSize: 12,
  },
  total: {
    marginTop: 20,
    borderTopWidth: 2,
    borderTopColor: '#000',
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: 'center',
    fontSize: 10,
    color: 'gray',
  },
});

// Receipt Document Component
const ReceiptDocument = ({ orderData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>Payment Receipt</Text>
      <View style={styles.section}>
        <View style={styles.row}><Text style={styles.label}>Receipt Number:</Text><Text style={styles.value}>{orderData.receiptNumber}</Text></View>
        <View style={styles.row}><Text style={styles.label}>Date:</Text><Text style={styles.value}>{orderData.date}</Text></View>
        <View style={styles.row}><Text style={styles.label}>Customer Name:</Text><Text style={styles.value}>{orderData.customerName}</Text></View>
        <View style={styles.row}><Text style={styles.label}>Email:</Text><Text style={styles.value}>{orderData.email}</Text></View>
        <View style={styles.row}><Text style={styles.label}>Phone Number:</Text><Text style={styles.value}>{orderData.phoneNumber}</Text></View>
      </View>
      <View style={styles.section}>
        <View style={styles.row}><Text style={styles.label}>Product:</Text><Text style={styles.value}>{orderData.productDescription}</Text></View>
        <View style={styles.row}><Text style={styles.label}>Payment Method:</Text><Text style={styles.value}>{orderData.paymentMethod}</Text></View>
        <View style={styles.row}><Text style={styles.label}>Delivery Method:</Text><Text style={styles.value}>{orderData.deliveryMethod}</Text></View>
      </View>
      <View style={styles.section}>
        <View style={styles.total}><Text style={styles.label}>Total Amount:</Text><Text style={styles.value}>FCFA {orderData.amount.toFixed(2)}</Text></View>
      </View>
      <View style={styles.footer}><Text>Thank you for your purchase!</Text><Text>For any questions, please contact support@yourstore.com</Text></View>
    </Page>
  </Document>
);

// Receipt Download Button Component
export const ReceiptDownloadButton = ({ orderData }) => (
  <PDFDownloadLink
    document={<ReceiptDocument orderData={orderData} />}
    fileName={`receipt-${orderData.receiptNumber}.pdf`}
    className="inline-block px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
  >
    {({ blob, url, loading, error }) => loading ? 'Generating receipt...' : 'Download Receipt'}
  </PDFDownloadLink>
);

export default ReceiptDocument;
