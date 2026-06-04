import SwiftUI
import WebKit

struct ContentView: View {
    private let appURL = URL(string: "https://shop-with-b.vercel.app")!
    private let shopMyURL = URL(string: "https://shopmy.us/login")!
    private let gmailURL = URL(string: "https://accounts.google.com")!
    private let instagramURL = URL(string: "https://www.instagram.com/comeshopwithb/")!

    var body: some View {
        NavigationStack {
            VStack(spacing: 0) {
                WebAppView(url: appURL)
                Divider()
                HStack {
                    Link("ShopMy", destination: shopMyURL)
                    Spacer()
                    Link("Gmail", destination: gmailURL)
                    Spacer()
                    Link("Instagram", destination: instagramURL)
                }
                .font(.headline)
                .padding()
                .background(Color(.systemBackground))
            }
            .navigationTitle("Shop with B")
            .navigationBarTitleDisplayMode(.inline)
        }
    }
}

struct WebAppView: UIViewRepresentable {
    let url: URL

    func makeUIView(context: Context) -> WKWebView {
        let configuration = WKWebViewConfiguration()
        configuration.allowsInlineMediaPlayback = true
        let webView = WKWebView(frame: .zero, configuration: configuration)
        webView.load(URLRequest(url: url))
        return webView
    }

    func updateUIView(_ webView: WKWebView, context: Context) {
        if webView.url == nil {
            webView.load(URLRequest(url: url))
        }
    }
}
