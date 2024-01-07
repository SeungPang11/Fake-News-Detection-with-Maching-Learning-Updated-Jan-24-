# Fake-News-Detection-with-Maching-Learning (Updated Jan 2024)
_**Techniques**_: Naive Bayes, Logistics Regression, XGBoost, TF-IDF, SMOTE <br />
_**Tools**_: Python, Javascript, CSS, React, Flask <br />

<img width="459" alt="Screen Shot 2024-01-04 at 6 28 39 PM" src="https://github.com/SeungPang11/Fake-News-Detection-with-Maching-Learning/assets/67944800/22d8967d-9f56-4e94-b4c6-03c7554bef19">
 <br />


## Datasets
**[Fake News Net](https://github.com/KaiDMML/FakeNewsNet)** <br />

* _**politifact_fake.csv**_ - 432 fake news collected from Politifact 
* _**politifact_real.csv**_ - 624 real news collected from Politifact 
* _**gossipcop_fake.csv**_ - 5323 fake news collected from GossipCop
* _**gossipcop_real.csv**_ - 16817 real news collected from GossipCop

## Exploratory Data Analysis
* _**Word Frequency of the Dataset**_<br />

**Gossip Cop Dataset** <br />
<img width="542" alt="Screen Shot 2024-01-04 at 6 39 46 PM" src="https://github.com/SeungPang11/Fake-News-Detection-with-Maching-Learning/assets/67944800/b8ec6a70-ad7b-4c35-859e-df88a003bb93"><br />

**Politifact Dataset** <br />
<img width="543" alt="Screen Shot 2024-01-04 at 6 40 08 PM" src="https://github.com/SeungPang11/Fake-News-Detection-with-Maching-Learning/assets/67944800/cfcba6d8-e34e-4454-8eda-e4124ebc0a94"> <br />

* _**Word Count Distribution**_<br />
<img width="400" alt="Screen Shot 2024-01-06 at 12 52 19 AM" src="https://github.com/SeungPang11/Fake-News-Detection-with-Maching-Learning-Updated-Jan-24-/assets/67944800/a6b52cf3-c048-485b-abe5-f74a71488984">

![Fake News Detection EDA Analysis](https://github.com/SeungPang11/Fake-News-Detection-with-Maching-Learning-Updated-Jan-24-/assets/67944800/80c0146a-246a-48b3-aef0-98a1944f1076)




## Methods
_**Feature Engineering**_<br />
* **Word Count**: The number of words in news titles. <br>
* **Retweet Count**: The number of times in news has been tweeted/ retweeted. <br>
* **TF-IDF**: Transform text into a representation of numbers while removing stopwords. <br>
* **Sentiment**: Emotional tone of news (Polarity [-1,1], Sensitivity [0,1]) <br>

_**Synthetic Minority Over-Sampling Technique (SMOTE)**_<br />
* Oversample minority class to tweak the model <br />
(reduce False Negatives, at the cost of increasing False Positives).<br /> 
The result is generally an increase in recall, at the cost of lower precision.

* Before SMOTE, the model was good at detecting real news (high True Positives),<br /> 
while performing poorly at detecting fake news (low True Negatives).<br /> 

_**Naive Bayes**_<br />
* Based on conditional probability (Bayes Theorem), probability of an event <br />
occurring given another event already happened, and assumes all features equally <br />
affect the outcome.

_**Logistic Regression**_<br />
* Models the probability of a discrete outcome given input variables.

_**Support Vector Machine**_<br />
* Finds a hyperplane in an N-dimensional space (# of features)  <br />
that distinctly classifies the data points.<br /> 
Computationally intensive and works better on small data with large features.

_**XGBoost**_<br />
* Based on the gradient-boosted trees algorithm which predicts <br />
a target variable by combining the estimates of a set of simpler models.

____________________________________________________
## Result - Updated Jan 2024
* Updated text pre-processing to better remove emojis, URLs, and special characters <br>
* Cross Validation to evaluate model performance <br>
* Tested oversampling minority class & undersampling majority class <br>
* **Improved performance**  
<img width="700" alt="Screen Shot 2024-01-06 at 7 09 30 PM" src="https://github.com/SeungPang11/Fake-News-Detection-with-Maching-Learning-Updated-Jan-24-/assets/67944800/0dc09df2-45a4-4429-afbb-6c92c013e94d"><br>
 -Achieved a **significantly improved F1** score from previous performance <br>
 -**Recall is more important** than Precision (Classifying Fake News as Real News is worse)<br>
 -**Best Performance:** Bernoulli Naive Bayes (Higher Recall and F1) <br>
 -**Worst Performance:** SVM (works best with high dimensional and large data) <br>
  and computationally intensive
  
____________________________________________________
## Web Application 
<img width="400" alt="Screen Shot 2023-01-20 at 10 21 10 AM" src="https://user-images.githubusercontent.com/67944800/214330280-93545534-3546-4fb9-af83-986c1ac6a820.png">

__________________________________________________________________________
## Previous Result
* Best Performing Models: Logistic Regression and Naive Bayes
* F1 score improved from **0.63 to 0.65**. <br />
**Confusion Matrix - Before and After SMOTE**
<img width="419" alt="Screen Shot 2023-10-31 at 8 09 50 PM" src="https://github.com/SeungPang11/Fake-News-Detection-with-Maching-Learning/assets/67944800/2397b3aa-c612-42d7-9caa-ad729ce65374">

**Performance of This Project**<br />
<img width="400" alt="Screen Shot 2024-01-04 at 11 07 07 PM" src="https://github.com/SeungPang11/Fake-News-Detection-with-Maching-Learning/assets/67944800/7a9d60d4-3f23-4ce6-8e7e-b6d908139cb4">

**Performance of FakeNewsNet Research** <br />
<img width="400" alt="Screen Shot 2023-01-01 at 11 38 23 AM copy" src="https://github.com/SeungPang11/Fake-News-Detection-with-Maching-Learning/assets/67944800/0f25ebec-6e85-463c-98b7-b82e4806ceba"> <br />
*FakeNewsNet’s F1 scores for the GossipCop dataset are higher due to <br/>
the greater number of real news than the number of fake news.







